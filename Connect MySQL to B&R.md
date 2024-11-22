# README BDD


## MySQL

### Création du serveur

- Suivre toutes les étapes de crétion de serveur MySQL et bien télécharger MySQL Workbench pour avoir une visualisation du serveur.
- Exemple MySQL Connection une fois le serveur crée

![Exemple MySQL Connection une fois le serveur crée](https://github.com/user-attachments/assets/1209ad30-40a7-44a3-8ca6-06fd27d3221e)


### Requêtes SQL pour mettre en place la base de donnée

1. Créer la base de données :

```bash
CREATE SCHEMA `bdd_name` ;
```

2. Créer une table à l'intérieur de la base

```bash
CREATE TABLE `bdd_name`.`my_table` (
  `idnew_table` INT NULL);
```

3. Supprimer une table :

```bash
DROP TABLE `bdd_name`.`my_table` ;
```

Cette commande supprime la table `my_table` de la base de données `bdd_name`. Assurez-vous de bien vouloir supprimer la table, car cette action est irréversible.

## Python connector

Télécharger le script python mappDatabaseConnector.py et l'insérer dans le projet

![image](https://github.com/user-attachments/assets/44ad53af-930a-438f-b8ab-b5114234792e)


Pour lancer le script effectuer la commmande suivante ou cliquer sur le fichier.py dans l'arborescence du projet.
```bash
python mappDatabaseConnector.py 85 127.0.0.1 3306 mysql
```
Argument par défaut : 
- 85 : port to communicate with mappDatabase
- 127.0.0.1 3306 : ip adress and port where the database is running
- mysql : database type

## mappDataBase configuration
### mappServices
Insérer un objet MpDatabaseCore

![image](https://github.com/user-attachments/assets/92b0a350-960d-428b-85ce-3db3e6567d18)

Configurer ensuite mpdatabasecore en remplacant les noms ou adress IP (mettre adresse IP du pc ou du serveur sur laquel la base de donnée tourne)

![image](https://github.com/user-attachments/assets/c32d5639-dc95-4d0f-8d3e-7e7a99126a95)


### Connexion à la base

1. Ajouter les variables suivantes:

```bash MpDatabaseCore_0 ``` de type ```bash MpDatabaseCore``` 

2. Créer un programme cyclic et ajouter un function block MpDatabaseCore, configurer le comme l'image suivantes:

![image](https://github.com/user-attachments/assets/4728084a-49fe-4fea-978d-0df7b5984a25)

3. Transferer dans l'automate
4. Se mettre en watch sur 
