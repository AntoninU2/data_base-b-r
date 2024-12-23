{
  "annotations": {
    "list": [
      {
        "builtIn": 1,
        "datasource": {
          "type": "grafana",
          "uid": "-- Grafana --"
        },
        "enable": true,
        "hide": true,
        "iconColor": "rgba(0, 211, 255, 1)",
        "name": "Annotations & Alerts",
        "type": "dashboard"
      }
    ]
  },
  "editable": true,
  "fiscalYearStartMonth": 0,
  "graphTooltip": 0,
  "id": 13,
  "links": [],
  "liveNow": true,
  "panels": [
    {
      "datasource": {
        "type": "mysql",
        "uid": "ce506roqmpqf4e"
      },
      "fieldConfig": {
        "defaults": {
          "custom": {
            "align": "auto",
            "cellOptions": {
              "type": "auto"
            },
            "inspect": false
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 4,
        "w": 3,
        "x": 0,
        "y": 0
      },
      "id": 25,
      "options": {
        "cellHeight": "sm",
        "footer": {
          "countRows": false,
          "fields": "",
          "reducer": [
            "sum"
          ],
          "show": false
        },
        "showHeader": true
      },
      "pluginVersion": "11.5.0-80207",
      "targets": [
        {
          "dataset": "sql_serveur",
          "datasource": {
            "type": "mysql",
            "uid": "ce506roqmpqf4e"
          },
          "editorMode": "builder",
          "format": "table",
          "rawSql": "SELECT DateTime FROM sql_serveur.standardtable ORDER BY DateTime DESC LIMIT 1 ",
          "refId": "A",
          "sql": {
            "columns": [
              {
                "parameters": [
                  {
                    "name": "DateTime",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              }
            ],
            "groupBy": [
              {
                "property": {
                  "type": "string"
                },
                "type": "groupBy"
              }
            ],
            "limit": 1,
            "orderBy": {
              "property": {
                "name": "DateTime",
                "type": "string"
              },
              "type": "property"
            },
            "orderByDirection": "DESC"
          },
          "table": "standardtable"
        }
      ],
      "title": "Panel Title",
      "type": "table"
    },
    {
      "collapsed": false,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 4
      },
      "id": 14,
      "panels": [],
      "title": "Counter panel",
      "type": "row"
    },
    {
      "datasource": {
        "type": "mysql",
        "uid": "ce506roqmpqf4e"
      },
      "description": "",
      "fieldConfig": {
        "defaults": {
          "mappings": [],
          "noValue": "No data",
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 4,
        "w": 2,
        "x": 0,
        "y": 5
      },
      "id": 12,
      "options": {
        "colorMode": "background",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "auto",
        "percentChangeColorMode": "standard",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "/^GoodCounter$/",
          "values": false
        },
        "showPercentChange": false,
        "textMode": "auto",
        "wideLayout": true
      },
      "pluginVersion": "11.5.0-80207",
      "targets": [
        {
          "dataset": "sql_serveur",
          "datasource": {
            "type": "mysql",
            "uid": "ce506roqmpqf4e"
          },
          "editorMode": "code",
          "format": "table",
          "rawQuery": true,
          "rawSql": "SELECT GoodCounter FROM sql_serveur.standardtable ORDER BY DateTime DESC LIMIT 1 ",
          "refId": "A",
          "sql": {
            "columns": [
              {
                "parameters": [
                  {
                    "name": "GoodCounter",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              }
            ],
            "groupBy": [
              {
                "property": {
                  "type": "string"
                },
                "type": "groupBy"
              }
            ],
            "limit": 1,
            "orderBy": {
              "property": {
                "name": "DateTime",
                "type": "string"
              },
              "type": "property"
            },
            "orderByDirection": "DESC"
          },
          "table": "standardtable"
        }
      ],
      "title": "Good counter",
      "transformations": [
        {
          "id": "calculateField",
          "options": {
            "binary": {
              "left": "GoodCounter",
              "right": "GoodCounter"
            },
            "mode": "reduceRow",
            "reduce": {
              "reducer": "sum"
            },
            "replaceFields": false
          }
        }
      ],
      "transparent": true,
      "type": "stat"
    },
    {
      "datasource": {
        "type": "mysql",
        "uid": "ce506roqmpqf4e"
      },
      "description": "",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "fixed"
          },
          "custom": {
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            }
          },
          "fieldMinMax": false,
          "mappings": [],
          "noValue": "No data"
        },
        "overrides": [
          {
            "matcher": {
              "id": "byName",
              "options": "BadCounter"
            },
            "properties": [
              {
                "id": "color",
                "value": {
                  "fixedColor": "red",
                  "mode": "fixed"
                }
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "GoodCounter"
            },
            "properties": [
              {
                "id": "color",
                "value": {
                  "fixedColor": "green",
                  "mode": "fixed"
                }
              }
            ]
          }
        ]
      },
      "gridPos": {
        "h": 11,
        "w": 5,
        "x": 2,
        "y": 5
      },
      "id": 13,
      "options": {
        "displayLabels": [
          "percent"
        ],
        "legend": {
          "calcs": [],
          "displayMode": "list",
          "placement": "bottom",
          "showLegend": true,
          "values": []
        },
        "pieType": "pie",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "tooltip": {
          "maxHeight": 600,
          "mode": "single",
          "sort": "none"
        }
      },
      "pluginVersion": "11.5.0-80207",
      "targets": [
        {
          "dataset": "my_data",
          "datasource": {
            "type": "mysql",
            "uid": "ce506roqmpqf4e"
          },
          "editorMode": "code",
          "format": "table",
          "rawQuery": true,
          "rawSql": "SELECT BadCounter, GoodCounter FROM sql_serveur.standardtable ORDER BY DateTime DESC LIMIT 1\r\n\r\n",
          "refId": "A",
          "sql": {
            "columns": [
              {
                "parameters": [
                  {
                    "name": "BadCounter",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              },
              {
                "parameters": [
                  {
                    "name": "GoodCounter",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              }
            ],
            "groupBy": [
              {
                "property": {
                  "type": "string"
                },
                "type": "groupBy"
              }
            ],
            "limit": 1,
            "orderBy": {
              "property": {
                "name": "DateTime",
                "type": "string"
              },
              "type": "property"
            },
            "orderByDirection": "ASC"
          },
          "table": "counter_data"
        }
      ],
      "title": "Counter",
      "type": "piechart"
    },
    {
      "datasource": {
        "type": "mysql",
        "uid": "ce506roqmpqf4e"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "custom": {
            "axisBorderShow": false,
            "axisCenteredZero": false,
            "axisColorMode": "text",
            "axisLabel": "",
            "axisPlacement": "auto",
            "fillOpacity": 80,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineWidth": 1,
            "scaleDistribution": {
              "type": "linear"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              }
            ]
          }
        },
        "overrides": [
          {
            "matcher": {
              "id": "byName",
              "options": "GoodCounterProduced"
            },
            "properties": [
              {
                "id": "color",
                "value": {
                  "fixedColor": "green",
                  "mode": "shades"
                }
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "BadCounterProduced"
            },
            "properties": [
              {
                "id": "color",
                "value": {
                  "fixedColor": "red",
                  "mode": "shades"
                }
              }
            ]
          }
        ]
      },
      "gridPos": {
        "h": 11,
        "w": 14,
        "x": 7,
        "y": 5
      },
      "id": 24,
      "options": {
        "barRadius": 0,
        "barWidth": 0.97,
        "fullHighlight": false,
        "groupWidth": 0.7,
        "legend": {
          "calcs": [],
          "displayMode": "list",
          "placement": "bottom",
          "showLegend": true
        },
        "orientation": "auto",
        "showValue": "auto",
        "stacking": "none",
        "tooltip": {
          "maxHeight": 600,
          "mode": "single",
          "sort": "none"
        },
        "xField": "Hour",
        "xTickLabelRotation": 0,
        "xTickLabelSpacing": 0
      },
      "pluginVersion": "11.5.0-80207",
      "targets": [
        {
          "dataset": "sql_serveur",
          "datasource": {
            "type": "mysql",
            "uid": "ce506roqmpqf4e"
          },
          "editorMode": "code",
          "format": "table",
          "rawQuery": true,
          "rawSql": "WITH HourlyCounters AS (\r\n    SELECT \r\n        DATE_FORMAT(DateTime, '%Y-%m-%d %H:00:00') AS Hour,  -- Regroupement par heure\r\n        MAX(GoodCounter) AS GoodCounter,  -- Dernier compteur des produits bons pour l'heure\r\n        MAX(BadCounter) AS BadCounter    -- Dernier compteur des produits mauvais pour l'heure\r\n    FROM \r\n        sql_serveur.standardtable\r\n    WHERE \r\n        DATE(DateTime) = '2024-12-02'  -- Filtrage pour une date spécifique\r\n    GROUP BY \r\n        DATE_FORMAT(DateTime, '%Y-%m-%d %H:00:00')  -- Regroupement par heure\r\n),\r\nHourlyDifferences AS (\r\n    SELECT \r\n        hc.Hour,\r\n        hc.GoodCounter,\r\n        hc.BadCounter,\r\n        LAG(hc.GoodCounter, 1, 0) OVER (ORDER BY hc.Hour) AS PrevGoodCounter,  -- Compteur de produits bons de l'heure précédente\r\n        LAG(hc.BadCounter, 1, 0) OVER (ORDER BY hc.Hour) AS PrevBadCounter    -- Compteur de produits mauvais de l'heure précédente\r\n    FROM \r\n        HourlyCounters hc\r\n)\r\nSELECT \r\n    Hour,\r\n    (GoodCounter - PrevGoodCounter) AS GoodCounterProduced,  -- Calcul de la différence avec l'heure précédente\r\n    (BadCounter - PrevBadCounter) AS BadCounterProduced     -- Calcul de la différence avec l'heure précédente\r\nFROM \r\n    HourlyDifferences\r\nORDER BY \r\n    Hour;\r\n",
          "refId": "A",
          "sql": {
            "columns": [],
            "groupBy": [],
            "orderBy": {
              "property": {
                "name": "DateTime",
                "type": "string"
              },
              "type": "property"
            },
            "orderByDirection": "ASC"
          },
          "table": "standardtable"
        }
      ],
      "title": "Production per hours",
      "type": "barchart"
    },
    {
      "datasource": {
        "type": "mysql",
        "uid": "ce506roqmpqf4e"
      },
      "description": "",
      "fieldConfig": {
        "defaults": {
          "mappings": [],
          "noValue": "No data",
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "red",
                "value": null
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 4,
        "w": 2,
        "x": 0,
        "y": 9
      },
      "id": 23,
      "options": {
        "colorMode": "background",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "auto",
        "percentChangeColorMode": "standard",
        "reduceOptions": {
          "calcs": [
            "last"
          ],
          "fields": "/.*/",
          "values": false
        },
        "showPercentChange": false,
        "textMode": "auto",
        "wideLayout": true
      },
      "pluginVersion": "11.5.0-80207",
      "targets": [
        {
          "dataset": "my_data",
          "datasource": {
            "type": "mysql",
            "uid": "ce506roqmpqf4e"
          },
          "editorMode": "code",
          "format": "table",
          "rawQuery": true,
          "rawSql": "SELECT BadCounter FROM sql_serveur.standardtable ORDER BY DateTime DESC LIMIT 1 ",
          "refId": "A",
          "sql": {
            "columns": [
              {
                "parameters": [
                  {
                    "name": "BadCounter",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              }
            ],
            "groupBy": [
              {
                "property": {
                  "type": "string"
                },
                "type": "groupBy"
              }
            ],
            "limit": 1,
            "orderBy": {
              "property": {
                "name": "DateTime",
                "type": "string"
              },
              "type": "property"
            },
            "orderByDirection": "DESC"
          },
          "table": "counter_data"
        }
      ],
      "title": "Bad counter",
      "transparent": true,
      "type": "stat"
    },
    {
      "collapsed": false,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 16
      },
      "id": 5,
      "panels": [],
      "title": "Live info",
      "type": "row"
    },
    {
      "datasource": {
        "type": "mysql",
        "uid": "ce506roqmpqf4e"
      },
      "description": "",
      "fieldConfig": {
        "defaults": {
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 4,
        "w": 5,
        "x": 0,
        "y": 17
      },
      "id": 10,
      "options": {
        "colorMode": "none",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "auto",
        "percentChangeColorMode": "standard",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "/.*/",
          "values": false
        },
        "showPercentChange": false,
        "text": {
          "valueSize": 50
        },
        "textMode": "auto",
        "wideLayout": true
      },
      "pluginVersion": "11.5.0-80207",
      "targets": [
        {
          "dataset": "sql_serveur",
          "datasource": {
            "type": "mysql",
            "uid": "ce506roqmpqf4e"
          },
          "editorMode": "code",
          "format": "table",
          "rawQuery": true,
          "rawSql": "SELECT CurrentState FROM sql_serveur.standardtable ORDER BY DateTime DESC LIMIT 1 ",
          "refId": "A",
          "sql": {
            "columns": [
              {
                "parameters": [
                  {
                    "name": "CurrentState",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              }
            ],
            "groupBy": [
              {
                "property": {
                  "type": "string"
                },
                "type": "groupBy"
              }
            ],
            "limit": 1,
            "orderBy": {
              "property": {
                "name": "DateTime",
                "type": "string"
              },
              "type": "property"
            },
            "orderByDirection": "DESC"
          },
          "table": "standardtable"
        }
      ],
      "title": "Current state",
      "type": "stat"
    },
    {
      "datasource": {
        "type": "mysql",
        "uid": "ce506roqmpqf4e"
      },
      "description": "",
      "fieldConfig": {
        "defaults": {
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 4,
        "w": 4,
        "x": 5,
        "y": 17
      },
      "id": 16,
      "options": {
        "colorMode": "none",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "auto",
        "percentChangeColorMode": "standard",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "/.*/",
          "values": false
        },
        "showPercentChange": false,
        "text": {
          "valueSize": 50
        },
        "textMode": "auto",
        "wideLayout": true
      },
      "pluginVersion": "11.5.0-80207",
      "targets": [
        {
          "dataset": "my_data",
          "datasource": {
            "type": "mysql",
            "uid": "ce506roqmpqf4e"
          },
          "editorMode": "code",
          "format": "table",
          "rawQuery": true,
          "rawSql": "SELECT CurrentMode FROM sql_serveur.standardtable ORDER BY DateTime DESC LIMIT 1 ",
          "refId": "A",
          "sql": {
            "columns": [
              {
                "parameters": [
                  {
                    "name": "CurrentFormat",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              }
            ],
            "groupBy": [],
            "limit": 50,
            "orderBy": {
              "property": {
                "name": [
                  "*"
                ],
                "type": "string"
              },
              "type": "property"
            },
            "whereJsonTree": {
              "children1": [],
              "id": "a98abb8b-0123-4456-b89a-b1936301e42c",
              "type": "group"
            }
          },
          "table": "status_data"
        }
      ],
      "title": "Current mode",
      "type": "stat"
    },
    {
      "datasource": {
        "type": "mysql",
        "uid": "ce506roqmpqf4e"
      },
      "description": "",
      "fieldConfig": {
        "defaults": {
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 4,
        "w": 4,
        "x": 9,
        "y": 17
      },
      "id": 11,
      "options": {
        "colorMode": "none",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "auto",
        "percentChangeColorMode": "standard",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "/.*/",
          "values": false
        },
        "showPercentChange": false,
        "text": {
          "valueSize": 50
        },
        "textMode": "auto",
        "wideLayout": true
      },
      "pluginVersion": "11.5.0-80207",
      "targets": [
        {
          "dataset": "my_data",
          "datasource": {
            "type": "mysql",
            "uid": "ce506roqmpqf4e"
          },
          "editorMode": "code",
          "format": "table",
          "rawQuery": true,
          "rawSql": "SELECT CurrentFormat FROM sql_serveur.standardtable ORDER BY DateTime DESC LIMIT 1 ",
          "refId": "A",
          "sql": {
            "columns": [
              {
                "parameters": [
                  {
                    "name": "CurrentFormat",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              }
            ],
            "groupBy": [],
            "limit": 50,
            "orderBy": {
              "property": {
                "name": [
                  "*"
                ],
                "type": "string"
              },
              "type": "property"
            },
            "whereJsonTree": {
              "children1": [],
              "id": "a98abb8b-0123-4456-b89a-b1936301e42c",
              "type": "group"
            }
          },
          "table": "status_data"
        }
      ],
      "title": "Current format",
      "type": "stat"
    },
    {
      "datasource": {
        "type": "mysql",
        "uid": "ce506roqmpqf4e"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "fixedColor": "transparent",
            "mode": "fixed"
          },
          "custom": {
            "fillOpacity": 70,
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "insertNulls": false,
            "lineWidth": 0,
            "spanNulls": false
          },
          "displayName": "State",
          "fieldMinMax": false,
          "mappings": [
            {
              "options": {
                "Aborted": {
                  "color": "dark-red",
                  "index": 3
                },
                "Clearing": {
                  "color": "red",
                  "index": 4
                },
                "Execute": {
                  "color": "green",
                  "index": 8
                },
                "Idle": {
                  "color": "blue",
                  "index": 1
                },
                "Resetting": {
                  "color": "orange",
                  "index": 5
                },
                "Starting": {
                  "color": "blue",
                  "index": 0
                },
                "Stopped": {
                  "color": "dark-orange",
                  "index": 7
                },
                "Stopping": {
                  "color": "orange",
                  "index": 6
                }
              },
              "type": "value"
            }
          ],
          "noValue": "No data",
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "transparent",
                "value": null
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 9,
        "w": 18,
        "x": 0,
        "y": 21
      },
      "id": 18,
      "options": {
        "alignValue": "center",
        "legend": {
          "displayMode": "list",
          "placement": "bottom",
          "showLegend": true
        },
        "mergeValues": true,
        "rowHeight": 1,
        "showValue": "never",
        "tooltip": {
          "maxHeight": 600,
          "mode": "single",
          "sort": "none"
        }
      },
      "pluginVersion": "11.5.0-80207",
      "targets": [
        {
          "dataset": "sql_serveur",
          "datasource": {
            "type": "mysql",
            "uid": "ce506roqmpqf4e"
          },
          "editorMode": "builder",
          "format": "table",
          "rawQuery": true,
          "rawSql": "SELECT CurrentState, DateTime FROM sql_serveur.standardtable ORDER BY DateTime DESC ",
          "refId": "A",
          "sql": {
            "columns": [
              {
                "parameters": [
                  {
                    "name": "CurrentState",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              },
              {
                "parameters": [
                  {
                    "name": "DateTime",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              }
            ],
            "groupBy": [
              {
                "property": {
                  "type": "string"
                },
                "type": "groupBy"
              }
            ],
            "orderBy": {
              "property": {
                "name": [
                  "DateTime"
                ],
                "type": "string"
              },
              "type": "property"
            },
            "orderByDirection": "DESC"
          },
          "table": "standardtable"
        }
      ],
      "title": "Machine state history",
      "type": "state-timeline"
    },
    {
      "collapsed": false,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 30
      },
      "id": 4,
      "panels": [],
      "title": "Error panel",
      "type": "row"
    },
    {
      "datasource": {
        "type": "mysql",
        "uid": "ce506roqmpqf4e"
      },
      "description": "",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "fixed"
          },
          "custom": {
            "align": "center",
            "cellOptions": {
              "type": "auto"
            },
            "filterable": false,
            "inspect": false
          },
          "displayName": "Message stop reason",
          "mappings": [],
          "noValue": "No error",
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 3,
        "w": 6,
        "x": 0,
        "y": 31
      },
      "id": 22,
      "options": {
        "cellHeight": "lg",
        "footer": {
          "countRows": false,
          "enablePagination": false,
          "fields": "",
          "reducer": [
            "sum"
          ],
          "show": false
        },
        "showHeader": true
      },
      "pluginVersion": "11.5.0-80207",
      "targets": [
        {
          "dataset": "sql_serveur",
          "datasource": {
            "type": "mysql",
            "uid": "ce506roqmpqf4e"
          },
          "editorMode": "builder",
          "format": "table",
          "rawQuery": true,
          "rawSql": "SELECT ErrorName FROM sql_serveur.standardtable ORDER BY DateTime DESC LIMIT 1 ",
          "refId": "A",
          "sql": {
            "columns": [
              {
                "parameters": [
                  {
                    "name": "ErrorName",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              }
            ],
            "groupBy": [
              {
                "property": {
                  "type": "string"
                },
                "type": "groupBy"
              }
            ],
            "limit": 1,
            "orderBy": {
              "property": {
                "name": "DateTime",
                "type": "string"
              },
              "type": "property"
            },
            "orderByDirection": "DESC"
          },
          "table": "standardtable"
        }
      ],
      "title": "",
      "type": "table"
    },
    {
      "datasource": {
        "type": "mysql",
        "uid": "ce506roqmpqf4e"
      },
      "fieldConfig": {
        "defaults": {
          "custom": {
            "align": "left",
            "cellOptions": {
              "type": "auto"
            },
            "filterable": false,
            "inspect": false
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              }
            ]
          }
        },
        "overrides": [
          {
            "matcher": {
              "id": "byName",
              "options": "TotalDuration"
            },
            "properties": [
              {
                "id": "unit",
                "value": "m"
              },
              {
                "id": "custom.align",
                "value": "center"
              }
            ]
          }
        ]
      },
      "gridPos": {
        "h": 5,
        "w": 11,
        "x": 7,
        "y": 31
      },
      "id": 21,
      "options": {
        "cellHeight": "sm",
        "footer": {
          "countRows": false,
          "fields": "",
          "reducer": [
            "sum"
          ],
          "show": false
        },
        "showHeader": true,
        "sortBy": [
          {
            "desc": true,
            "displayName": "Duration"
          }
        ]
      },
      "pluginVersion": "11.5.0-80207",
      "targets": [
        {
          "dataset": "sql_serveur",
          "datasource": {
            "type": "mysql",
            "uid": "ce506roqmpqf4e"
          },
          "editorMode": "code",
          "format": "table",
          "rawQuery": true,
          "rawSql": "WITH ErrorBlocks AS (\r\n    SELECT \r\n        DateTime,\r\n        ErrorName,\r\n        CASE \r\n            WHEN COALESCE(ErrorName, '') <> '' AND \r\n                 (SELECT COALESCE(ErrorName, '') \r\n                  FROM sql_serveur.standardtable AS prev \r\n                  WHERE prev.DateTime < t.DateTime \r\n                  ORDER BY DateTime DESC \r\n                  LIMIT 1) != ErrorName THEN 1\r\n            WHEN COALESCE(ErrorName, '') = '' THEN 0 -- Ligne vide, donc pas un nouveau bloc\r\n            ELSE 0 -- Sinon, on reste dans le même bloc d'erreur\r\n        END AS IsNewBlock\r\n    FROM \r\n        sql_serveur.standardtable AS t\r\n    WHERE \r\n        COALESCE(ErrorName, '') <> '' -- Exclut les lignes avec des valeurs NULL ou vides\r\n),\r\nBlockIdentifiers AS (\r\n    SELECT \r\n        *,\r\n        SUM(IsNewBlock) OVER (ORDER BY DateTime) AS BlockID -- Identifie un bloc d'erreurs consécutives\r\n    FROM \r\n        ErrorBlocks\r\n),\r\nBlockDurations AS (\r\n    SELECT \r\n        ErrorName,\r\n        MIN(DateTime) AS StartTime,\r\n        MAX(DateTime) AS EndTime,\r\n        TIMESTAMPDIFF(MINUTE, MIN(DateTime), MAX(DateTime)) AS BlockDurationMinutes -- Durée en minutes de chaque bloc\r\n    FROM \r\n        BlockIdentifiers\r\n    GROUP BY \r\n        ErrorName, BlockID\r\n)\r\nSELECT \r\n    ErrorName,\r\n    COALESCE(SUM(BlockDurationMinutes), 0) AS TotalDuration -- Somme des durées de tous les blocs pour une erreur donnée\r\nFROM \r\n    BlockDurations\r\nGROUP BY \r\n    ErrorName\r\nORDER BY \r\n    TotalDuration DESC;\r\n",
          "refId": "A",
          "sql": {
            "columns": [
              {
                "parameters": [
                  {
                    "name": "*",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              }
            ],
            "groupBy": [
              {
                "property": {
                  "type": "string"
                },
                "type": "groupBy"
              }
            ],
            "limit": 50
          },
          "table": "standardtable"
        }
      ],
      "title": "Error by time of occurence",
      "type": "table"
    },
    {
      "datasource": {
        "type": "mysql",
        "uid": "ce506roqmpqf4e"
      },
      "fieldConfig": {
        "defaults": {},
        "overrides": []
      },
      "gridPos": {
        "h": 13,
        "w": 6,
        "x": 0,
        "y": 34
      },
      "id": 19,
      "options": {
        "dedupStrategy": "none",
        "enableInfiniteScrolling": false,
        "enableLogDetails": false,
        "prettifyLogMessage": false,
        "showCommonLabels": false,
        "showLabels": false,
        "showTime": true,
        "sortOrder": "Descending",
        "wrapLogMessage": false
      },
      "pluginVersion": "11.5.0-80207",
      "targets": [
        {
          "dataset": "sql_serveur",
          "datasource": {
            "type": "mysql",
            "uid": "ce506roqmpqf4e"
          },
          "editorMode": "code",
          "format": "table",
          "rawQuery": true,
          "rawSql": "WITH ErrorBlocks AS (\r\n    SELECT \r\n        DateTime,\r\n        ErrorName,\r\n        CASE \r\n            WHEN COALESCE(ErrorName, '') <> '' AND \r\n                 (SELECT COALESCE(ErrorName, '') FROM sql_serveur.standardtable AS prev WHERE prev.DateTime < t.DateTime ORDER BY DateTime DESC LIMIT 1) != ErrorName THEN 1\r\n            WHEN COALESCE(ErrorName, '') = '' THEN 0 -- Ligne vide, donc pas un nouveau bloc\r\n            ELSE 0 -- Sinon, on reste dans le même bloc d'erreur\r\n        END AS IsNewBlock\r\n    FROM \r\n        sql_serveur.standardtable AS t\r\n    WHERE \r\n        COALESCE(ErrorName, '') <> '' -- Exclut les lignes avec des valeurs NULL ou vides\r\n),\r\nBlockIdentifiers AS (\r\n    SELECT \r\n        *,\r\n        SUM(IsNewBlock) OVER (ORDER BY DateTime) AS BlockID -- Identifie un bloc d'erreurs consécutives\r\n    FROM \r\n        ErrorBlocks\r\n),\r\nErrorStartTimes AS (\r\n    SELECT \r\n        ErrorName,\r\n        BlockID,\r\n        MIN(DateTime) AS StartTime -- Heure de départ du défaut pour chaque bloc d'erreur\r\n    FROM \r\n        BlockIdentifiers\r\n    GROUP BY \r\n        ErrorName, BlockID -- Grouper par erreur et bloc\r\n)\r\nSELECT \r\n    ErrorName,\r\n    StartTime -- Heure de départ du défaut\r\nFROM \r\n    ErrorStartTimes\r\nORDER BY \r\n    StartTime DESC; \r\n",
          "refId": "A",
          "sql": {
            "columns": [
              {
                "parameters": [
                  {
                    "name": "ErrorCode",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              },
              {
                "parameters": [
                  {
                    "name": "ErrorName",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              },
              {
                "parameters": [
                  {
                    "name": "DateTime",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              }
            ],
            "groupBy": [
              {
                "property": {
                  "type": "string"
                },
                "type": "groupBy"
              }
            ],
            "orderBy": {
              "property": {
                "name": "DateTime",
                "type": "string"
              },
              "type": "property"
            },
            "whereJsonTree": {
              "children1": [
                {
                  "id": "b9b88b9a-cdef-4012-b456-71937882a7dc",
                  "properties": {
                    "field": "ErrorName",
                    "fieldSrc": "field",
                    "operator": "is_not_empty",
                    "value": [],
                    "valueSrc": [],
                    "valueType": []
                  },
                  "type": "rule"
                }
              ],
              "id": "aa8b99bb-0123-4456-b89a-b19367598034",
              "properties": {
                "conjunction": "OR"
              },
              "type": "group"
            },
            "whereString": "COALESCE(ErrorName, '') <> ''"
          },
          "table": "standardtable"
        }
      ],
      "title": "Erreur logs",
      "type": "logs"
    },
    {
      "datasource": {
        "type": "mysql",
        "uid": "ce506roqmpqf4e"
      },
      "fieldConfig": {
        "defaults": {
          "custom": {
            "align": "auto",
            "cellOptions": {
              "type": "auto"
            },
            "filterable": false,
            "inspect": false
          },
          "fieldMinMax": false,
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              }
            ]
          }
        },
        "overrides": [
          {
            "matcher": {
              "id": "byName",
              "options": "Occurrence"
            },
            "properties": [
              {
                "id": "custom.align",
                "value": "center"
              }
            ]
          }
        ]
      },
      "gridPos": {
        "h": 6,
        "w": 11,
        "x": 7,
        "y": 36
      },
      "id": 20,
      "options": {
        "cellHeight": "sm",
        "footer": {
          "countRows": false,
          "enablePagination": false,
          "fields": [
            "Occurrences"
          ],
          "reducer": [
            "sum"
          ],
          "show": false
        },
        "showHeader": true,
        "sortBy": [
          {
            "desc": true,
            "displayName": "Occurrences"
          }
        ]
      },
      "pluginVersion": "11.5.0-80207",
      "targets": [
        {
          "dataset": "sql_serveur",
          "datasource": {
            "type": "mysql",
            "uid": "ce506roqmpqf4e"
          },
          "editorMode": "code",
          "format": "table",
          "rawQuery": true,
          "rawSql": "WITH ErrorBlocks AS (\r\n    SELECT \r\n        DateTime,\r\n        ErrorName,\r\n        CASE \r\n            WHEN COALESCE(ErrorName, '') <> '' AND \r\n                 (SELECT COALESCE(ErrorName, '') FROM sql_serveur.standardtable AS prev WHERE prev.DateTime < t.DateTime ORDER BY DateTime DESC LIMIT 1) != ErrorName THEN 1\r\n            WHEN COALESCE(ErrorName, '') = '' THEN 0 -- Ligne vide, donc pas un nouveau bloc\r\n            ELSE 0 -- Sinon, on reste dans le même bloc d'erreur\r\n        END AS IsNewBlock\r\n    FROM \r\n        sql_serveur.standardtable AS t\r\n    WHERE \r\n        COALESCE(ErrorName, '') <> '' -- Exclut les lignes avec des valeurs NULL ou vides\r\n),\r\nBlockIdentifiers AS (\r\n    SELECT \r\n        *,\r\n        SUM(IsNewBlock) OVER (ORDER BY DateTime) AS BlockID -- Identifie un bloc d'erreurs consécutives\r\n    FROM \r\n        ErrorBlocks\r\n),\r\nErrorOccurrences AS (\r\n    SELECT \r\n        ErrorName,\r\n        BlockID,\r\n        COUNT(*) AS OccurrenceCount -- Compte les occurrences dans chaque bloc d'erreur\r\n    FROM \r\n        BlockIdentifiers\r\n    GROUP BY \r\n        ErrorName, BlockID -- Compte les blocs par erreur\r\n)\r\nSELECT \r\n    ErrorName,\r\n    COUNT(*) AS Occurrence -- Compte le nombre total de blocs pour chaque erreur\r\nFROM \r\n    ErrorOccurrences\r\nGROUP BY \r\n    ErrorName\r\nORDER BY \r\n    Occurrence DESC\r\nLIMIT 5;\r\n",
          "refId": "A",
          "sql": {
            "columns": [
              {
                "parameters": [
                  {
                    "name": "ErrorName",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              },
              {
                "alias": "\"occurence\"",
                "name": "COUNT",
                "parameters": [
                  {
                    "name": "ErrorName",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              }
            ],
            "groupBy": [
              {
                "property": {
                  "name": "ErrorName",
                  "type": "string"
                },
                "type": "groupBy"
              }
            ],
            "orderBy": {
              "property": {
                "name": "COUNT(ErrorName)",
                "type": "string"
              },
              "type": "property"
            },
            "whereJsonTree": {
              "children1": [
                {
                  "id": "aa999aaa-89ab-4cde-b012-31937884254a",
                  "properties": {
                    "field": "ErrorName",
                    "fieldSrc": "field",
                    "operator": "is_not_empty",
                    "value": [],
                    "valueSrc": [],
                    "valueType": []
                  },
                  "type": "rule"
                }
              ],
              "id": "aa8b99bb-0123-4456-b89a-b19367598034",
              "properties": {
                "conjunction": "OR"
              },
              "type": "group"
            },
            "whereString": "COALESCE(ErrorName, '') <> ''"
          },
          "table": "standardtable"
        }
      ],
      "title": "Error by number of occurence",
      "type": "table"
    },
    {
      "collapsed": false,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 47
      },
      "id": 3,
      "panels": [],
      "title": "Rate panel",
      "type": "row"
    },
    {
      "datasource": {
        "type": "mysql",
        "uid": "ce506roqmpqf4e"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic-by-name",
            "seriesBy": "last"
          },
          "custom": {
            "axisBorderShow": false,
            "axisCenteredZero": false,
            "axisColorMode": "text",
            "axisLabel": "Rate",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "barWidthFactor": 0.6,
            "drawStyle": "line",
            "fillOpacity": 10,
            "gradientMode": "hue",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "insertNulls": false,
            "lineInterpolation": "linear",
            "lineStyle": {
              "fill": "solid"
            },
            "lineWidth": 2,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "auto",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "fieldMinMax": false,
          "mappings": [],
          "noValue": "No data",
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              }
            ]
          }
        },
        "overrides": [
          {
            "matcher": {
              "id": "byName",
              "options": "RequestedRate"
            },
            "properties": [
              {
                "id": "color",
                "value": {
                  "fixedColor": "super-light-blue",
                  "mode": "fixed"
                }
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "ActualRate"
            },
            "properties": [
              {
                "id": "color",
                "value": {
                  "fixedColor": "green",
                  "mode": "fixed"
                }
              }
            ]
          }
        ]
      },
      "gridPos": {
        "h": 8,
        "w": 12,
        "x": 0,
        "y": 48
      },
      "id": 1,
      "options": {
        "legend": {
          "calcs": [],
          "displayMode": "hidden",
          "placement": "right",
          "showLegend": false
        },
        "tooltip": {
          "maxHeight": 600,
          "mode": "multi",
          "sort": "none"
        }
      },
      "pluginVersion": "11.5.0-80207",
      "targets": [
        {
          "dataset": "my_data",
          "datasource": {
            "type": "mysql",
            "uid": "ce506roqmpqf4e"
          },
          "editorMode": "code",
          "format": "table",
          "rawQuery": true,
          "rawSql": "SELECT RequestedRate, ActualRate, DateTime FROM sql_serveur.standardtable",
          "refId": "A",
          "sql": {
            "columns": [
              {
                "parameters": [
                  {
                    "name": "actual_rate",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              },
              {
                "parameters": [],
                "type": "function"
              }
            ],
            "groupBy": [
              {
                "property": {
                  "type": "string"
                },
                "type": "groupBy"
              }
            ],
            "limit": 50
          },
          "table": "rate_data"
        }
      ],
      "title": "Rate history",
      "type": "timeseries"
    },
    {
      "datasource": {
        "type": "mysql",
        "uid": "ce506roqmpqf4e"
      },
      "description": "",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "fixed"
          },
          "fieldMinMax": false,
          "mappings": [],
          "min": 0,
          "noValue": "No data",
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              }
            ]
          }
        },
        "overrides": [
          {
            "matcher": {
              "id": "byName",
              "options": "ActualRate"
            },
            "properties": [
              {
                "id": "color",
                "value": {
                  "mode": "continuous-RdYlGr"
                }
              }
            ]
          }
        ]
      },
      "gridPos": {
        "h": 8,
        "w": 5,
        "x": 12,
        "y": 48
      },
      "id": 2,
      "options": {
        "minVizHeight": 75,
        "minVizWidth": 75,
        "orientation": "auto",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "/^ActualRate$/",
          "limit": 1,
          "values": false
        },
        "showThresholdLabels": true,
        "showThresholdMarkers": false,
        "sizing": "auto"
      },
      "pluginVersion": "11.5.0-80207",
      "targets": [
        {
          "dataset": "sql_serveur",
          "datasource": {
            "type": "mysql",
            "uid": "ce506roqmpqf4e"
          },
          "editorMode": "builder",
          "format": "table",
          "rawQuery": true,
          "rawSql": "SELECT ActualRate, RequestedRate FROM sql_serveur.standardtable ORDER BY DateTime DESC LIMIT 1 ",
          "refId": "A",
          "sql": {
            "columns": [
              {
                "parameters": [
                  {
                    "name": "ActualRate",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              },
              {
                "parameters": [
                  {
                    "name": "RequestedRate",
                    "type": "functionParameter"
                  }
                ],
                "type": "function"
              }
            ],
            "groupBy": [
              {
                "property": {
                  "type": "string"
                },
                "type": "groupBy"
              }
            ],
            "limit": 1,
            "orderBy": {
              "property": {
                "name": "DateTime",
                "type": "string"
              },
              "type": "property"
            },
            "orderByDirection": "DESC"
          },
          "table": "standardtable"
        }
      ],
      "title": "Actual rate",
      "type": "gauge"
    }
  ],
  "preload": false,
  "refresh": "",
  "schemaVersion": 40,
  "tags": [],
  "templating": {
    "list": []
  },
  "time": {
    "from": "2024-12-02T08:28:30.000Z",
    "to": "2024-12-02T14:35:00.000Z"
  },
  "timepicker": {},
  "timezone": "utc",
  "title": "Dashboard 2",
  "uid": "de5ed2b389q0wb",
  "version": 1,
  "weekStart": ""
}
