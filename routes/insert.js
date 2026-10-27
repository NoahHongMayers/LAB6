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

    var querystring = `
        INSERT INTO caracpays
        (Pays, NbHab, Capitale, DensitePop, PIB, dejaVisite, Commentaires)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(querystring, [
        Country,
        Population,
        Capital,
        Density,
        PIB === '' ? null : PIB,
        Visited,
        Comments
    ], function (err, result) {

        if (err) {
            console.log(err);
            return res.status(500).send("Database error: " + err.message);
        }

        res.redirect('/import0');
    });
});

module.exports = router;

module.exports = router;