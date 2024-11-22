#!/usr/bin/env python
from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import urllib.parse
import socketserver
import collections
import re

import pymysql

__version__ = "5.12.0"

class DB:
    _user = None
    _password = None
    _host = None
    _database = None
    _cnx = None
    _jsonResponse = None

    def connect(self, user, password, host, port, database):
        self._user = user
        self._password = password
        self._host = host
        self._database = database
        self._port = port
        self._cnx = pymysql.connect(user=self._user, password=self._password,
                                            host=self._host,
                                            database=self._database,
                                            port=self._port)

    def disconnect(self):
        try:
            self._cnx.close()
            return self.makeJsonResponse(0, "disconnected", "")
        except Exception:
            return self.makeJsonResponse(1, "not connected to SQL server", "")

    def query(self, sql):
        try:
            cursor = self._cnx.cursor(buffered=True)
            for statement in re.sub(r'(\)\s*);', r'\1%;%', sql).split('%;%'):
                cursor.execute(statement)
            data = []
            response = {}
            try:
                data = cursor.fetchall()
            except:
                pass
            if cursor.description:
                column_names = cursor.column_names
                response = self.sqlToJson(column_names, data, cursor.description)
            self._cnx.commit()
            cursor.close()
            self._jsonResponse = self.makeJsonResponse(0, "", response)
            return json.dumps({"responseSize": len(self._jsonResponse)})
        except Exception as ex:
            return self.makeJsonResponse(1, str(ex), "")

    def sqlToJson(self, column_names, dataIn, colTypes):
        data = []
        for row in dataIn:
            dataRow = collections.OrderedDict()
            for i, field in enumerate(row):
                dataRow[column_names[i]] = field
            data.append(dataRow)
        response = {'data': data, 'columns': column_names}
        return response

    def makeJsonResponse(self, status, message, response):
        data = {'status': status, 'message': message, 'response': response}
        return json.dumps(data)

class S(BaseHTTPRequestHandler):
    __sqlDb = DB()

    def _set_headers(self, contentLength):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.send_header("Content-Length", contentLength)
        self.send_header("Connection", "Keep-Alive")
        self.end_headers()

    def _respond(self, jsonResponse):
        self._set_headers(len(jsonResponse))
        self.wfile.write(bytes(jsonResponse, "utf-8"))

    def do_GET(self):
        self._set_headers(len("server up.."))
        self.wfile.write(b"server up..")

    def do_POST(self):
        length = int(self.headers.get('content-length'))
        data = urllib.parse.parse_qs(self.rfile.read(length).decode('utf-8'), keep_blank_values=1, encoding='utf-8')
        jsonRequest = list(data.items())[0][0]
        try:
            serialized = json.loads(jsonRequest)
            if "getData" in serialized:
                self._respond(self.__sqlDb.getData())
            else:
                execQuery = serialized['query']
                self._respond(self.__sqlDb.query(execQuery))
        except KeyError:
            try:
                connection = serialized['connection'][0]
                self.__sqlDb.connect(connection['user'], connection['password'], args.sqlHost, args.sqlPort, connection['database'])
                self._respond(self.__sqlDb.makeJsonResponse(0, "", {'timeout': args.httpTimeout}))
            except Exception as ex:
                self._respond(self.__sqlDb.makeJsonResponse(1, str(ex), ""))

def run(server_class=HTTPServer, handler_class=S, webServerPort=85):
    handler_class.protocol_version = 'HTTP/1.1'
    httpd = socketserver.TCPServer(("", webServerPort), handler_class)
    print(f'Starting HTTP server at port {webServerPort}')
    httpd.serve_forever()

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description='Simple MySQL Connector')
    parser.add_argument('httpPort', type=str, default='85', const=1, nargs='?', help='HTTP server port (default: 85)')
    parser.add_argument('sqlHost', type=str, default='127.0.0.1', const=1, nargs='?', help='SQL server host (default: 127.0.0.1)')
    parser.add_argument('sqlPort', type=int, default=3306, const=1, nargs='?', help='SQL server port (default: 3306)')
    parser.add_argument('httpTimeout', type=int, default=60, const=1, nargs='?', help='Timeout in seconds (default: 60)')
    args = parser.parse_args()

    run(webServerPort=int(args.httpPort))
