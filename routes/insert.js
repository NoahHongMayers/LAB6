/**
 * @file     insert.js
 * @author   Noah Hong Mayers | 202430525@edu.clg.qc.ca
 * @version  1.0
 * @date     October 27 2026
 * @brief    Insertion Router
 */
var express = require('express');
var router = express.Router();
var connection = require('../config/sql');

//DISPLAY
router.get('/insert', function (req, res) {
    res.render('pages/insert');
});

//POST EVENT
router.post('/insert', function (req, res) {

    var Country = req.body.Country;
    var Population = req.body.Population;
    var Capital = req.body.Capital;
    var Density = req.body.Density;
    var PIB = req.body.PIB;
    var Visited = req.body.Visited;
    var Comments = req.body.Comments;

    if (!Country?.trim() ||
        !Capital?.trim() ||
        Population === undefined ||
        String(Population).trim() === '' ||
        !['O', 'N'].includes(Visited)) {

        return res.status(400).send(
            "Erreur : certains champs obligatoires sont vides."
        );
    }

    const populationNumber = Number(Population);

    if (!Number.isSafeInteger(populationNumber) ||
        populationNumber < 0 ||
        populationNumber > 2147483647) {

        return res.status(400).send(
            "Erreur : population invalide."
        );
    }

    const densityNumber =
        Density === undefined || String(Density).trim() === ''
            ? null
            : Number(Density);

    const pibNumber =
        PIB === undefined || String(PIB).trim() === ''
            ? null
            : Number(PIB);

    if ((densityNumber !== null &&
        (!Number.isFinite(densityNumber) ||
            densityNumber < 0 ||
            densityNumber > 999999.99)) ||
        (pibNumber !== null &&
            (!Number.isSafeInteger(pibNumber) ||
                pibNumber < 0 ||
                pibNumber > 2147483647))) {

        return res.status(400).send(
            "Erreur : densité ou PIB invalide."
        );
    }

    var querystring = `
        INSERT INTO caracpays
        (Pays, NbHab, Capitale, DensitePop, PIB, dejaVisite, Commentaires)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(querystring, [
        Country,
        populationNumber,
        Capital.trim(),
        densityNumber,
        pibNumber,
        Visited,
        Comments
    ], function (err, result) {

        if (err) {
    console.error(err);

    if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).send(
            "Cet identifiant existe déjà."
        );
    }

    return res.status(500).send(
        "Impossible d'ajouter le pays."
    );
}

        res.redirect('/import0');
    });
});

module.exports = router;

module.exports = router;