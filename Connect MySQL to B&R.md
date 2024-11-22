# README BDD

## Requêtes SQL pour mettre en place la base de donnée

1. Créer la base de données :

```bash
CREATE SCHEMA `new_schema` ;
```

2. Créer une table à l'intérieur de la base

```bash
CREATE TABLE `my_data`.`new_table` (
  `idnew_table` INT NULL);
```

3. Supprimer une table :

```bash
DROP TABLE `my_data`.`new_table` ;
```

Cette commande supprime la table `new_table` de la base de données `my_data`. Assurez-vous de bien vouloir supprimer la table, car cette action est irréversible.
