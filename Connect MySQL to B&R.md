
# README BDD

## MySQL Setup

### Server Creation

- Follow all the steps to create a MySQL server and download **MySQL Workbench** to visualize and manage your server.
- Example of MySQL Connection after creating the server:

![Example MySQL Connection after server creation](https://github.com/user-attachments/assets/1209ad30-40a7-44a3-8ca6-06fd27d3221e)

---

### SQL Queries to Set Up the Database

1. **Create the database**:

   ```sql
   CREATE SCHEMA `bdd_name`;
   ```

2. **Create a table inside the database**:

   ```sql
   CREATE TABLE `bdd_name`.`my_table` (
     `idnew_table` INT NULL
   );
   ```

3. **Delete a table**:

   ```sql
   DROP TABLE `bdd_name`.`my_table`;
   ```

   > ⚠️ This command deletes the `my_table` table from the `bdd_name` database. Be cautious as this action is irreversible.

---

## Python Connector

1. **Download and integrate the script**:  
   Download the [`mappdatabaseconnector_5_24.py`](mappdatabaseconnector_5_24.py) script and add it to your project.

   ![Python script integration](https://github.com/user-attachments/assets/136397f2-751c-456a-b7e1-8a8047b9b77c)


2. **Run the script**:
   > ⚠️ This script need python 3.8 to run correctly
   - Execute the following command or directly click the `mappdatabaseconnector_5_24.py` file in your project's directory:

   ```bash
   python mappdatabaseconnector_5_24.py 85 127.0.0.1 3306 mysql
   ```

   **Default Arguments**:
   - `85`: Port used to communicate with `mappDatabase`.
   - `127.0.0.1 3306`: IP address and port where the database is running.
   - `mysql`: Type of the database.

---

## mappDatabase Configuration

### mappServices Integration

1. **Add a `MpDatabaseCore` object**:  
   Integrate an instance of `MpDatabaseCore` in your project.

   ![mappServices MpDatabaseCore configuration](https://github.com/user-attachments/assets/92b0a350-960d-428b-85ce-3db3e6567d18)

2. **Configure `MpDatabaseCore`**:  
   Update the configuration by replacing names or IP addresses with the specific **IP address of the PC or server hosting the database**.

   ![MpDatabaseCore IP configuration](https://github.com/user-attachments/assets/c32d5639-dc95-4d0f-8d3e-7e7a99126a95)

---

### Connecting to the Database

1. **Add the following variable**:
   - `MpDatabaseCore_0` of type `MpDatabaseCore`.

2. **Create a cyclic program**:
   - Insert a `MpDatabaseCore` function block and configure it as shown below:

     ![Cyclic program configuration](https://github.com/user-attachments/assets/4728084a-49fe-4fea-978d-0df7b5984a25)

3. **Deploy to the controller**:
   - Transfer the project to the controller.
   - Set `connect` to `TRUE`. The `Info>Diag>StatusID>ID` should remain at `mpDATABASE_NO_ERROR`.  
     If errors occur, ensure:
     - The Python script is running.
     - The database is accessible.
     - The `mappDatabase` configuration matches the database settings.
     - Try to disable the firewall

     ![Error troubleshooting](https://github.com/user-attachments/assets/d37fcb07-c9ab-434c-beda-ce90de4bfb7f)

## Creating and Executing a Query

### 1. Add the Exact Same Data Structure as the Table
First, ensure the data structure matches the table's schema to properly interact with the data.

![Data Structure Image 1](https://github.com/user-attachments/assets/a9add353-3927-4018-a61b-00700e2de6cf)

![Data Structure Image 2](https://github.com/user-attachments/assets/19c3df60-e041-49d9-9601-998f08c1ec33)

![Data Structure Image 3](https://github.com/user-attachments/assets/22ceac8e-9de7-422e-a21d-9d311885fb59)

### 2. Configuration of MpDatabaseQuery
Add the following variable of type `MpDatabaseQuery`:

- `MpDatabaseQuery_0` of type `MpDatabaseQuery`.

Configure the `MpDatabaseQuery` as shown below:

![Data Structure Image 4](https://github.com/user-attachments/assets/c63ea84d-8298-4cad-8d61-951137475f92)

### 3. Create a Cyclic Program
To ensure the query runs in a loop, insert the `MpDatabaseQuery` function block and configure it as shown below:

![Cyclic Program Configuration](https://github.com/user-attachments/assets/22b26da7-577a-490a-8eba-f7b1443ad39e)

### 4. Deploy to the Controller
In the Python script, you will see the SQL request being executed:

![SQL Request in Python Script](https://github.com/user-attachments/assets/80bfef3e-d0b4-4880-a75b-c358be406831)

![Controller Deployment Image](https://github.com/user-attachments/assets/87036a5c-b3f7-4740-81d0-5f96eb703821)
