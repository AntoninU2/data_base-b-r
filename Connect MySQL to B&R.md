# README BDD

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
