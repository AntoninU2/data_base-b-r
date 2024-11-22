# README BDD


## Création du serveur

- Suivre toutes les étapes de crétion de serveur MySQL et bien télécharger MySQL Workbench pour avoir une visualisation du serveur.
- Exemple MySQL Connection une fois le serveur crée

![Exemple MySQL Connection une fois le serveur crée](https://github.com/user-attachments/assets/1209ad30-40a7-44a3-8ca6-06fd27d3221e)


## Requêtes SQL pour mettre en place la base de donnée

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



