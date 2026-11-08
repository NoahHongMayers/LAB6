-- Noah Hong Mayers
-- A1 / A7 : les six requêtes SQL sont regroupées ici
SELECT * FROM `paysg20`.`caracpays` WHERE NbHab > 100000000 AND DensitePop > 100;
SELECT * FROM `paysg20`.`caracpays` WHERE dejaVisite = "O" AND (PIB > 2000 OR NbHab > 300000000);
SELECT * FROM `paysg20`.`caracpays` WHERE Pays LIKE 'a%' AND Capitale LIKE '%a%';
SELECT * FROM `paysg20`.`caracpays` WHERE (dejaVisite = "N" AND (pib IS NULL OR DensitePop < 50)) OR (dejaVisite = "O" AND NbHab < 50000000);
SELECT * FROM `paysg20`.`caracpays` WHERE PIB IS NOT NULL ORDER BY PIB DESC LIMIT 1;
SELECT * FROM `paysg20`.`caracpays` WHERE NbHab IS NOT NULL ORDER BY NbHab ASC LIMIT 1;
