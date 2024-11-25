
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
   Download the [`mappDatabaseConnector.py`](mappDatabaseConnector.py) script and add it to your project.

   ![Python script integration](https://github.com/user-attachments/assets/44ad53af-930a-438f-b8ab-b5114234792e)

2. **Run the script**:  
   Execute the following command or directly click the `.py` file in your project's directory:

   ```bash
   python mappDatabaseConnector.py 85 127.0.0.1 3306 mysql
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

     ![Error troubleshooting](https://github.com/user-attachments/assets/d7e6a951-7430-454f-8882-9ae6bce3dd50)
