/**
 * @file     delete.js
 * @author   Noah Hong Mayers | 202430525@edu.clg.qc.ca
 * @version  1.0
 * @date     October 27 2026
 * @brief    Deletion Router
 */
var express = require('express');
var router = express.Router();
var connection = require('../config/sql');

//DISPLAY
router.get('/delete', function (req, res) {
    res.render('pages/delete');
});

//POST EVENT
router.post('/delete', function (req, res) {

    var CountryName = req.body.Country;


    var querystring = 'DELETE FROM caracpays WHERE Pays = ?';

    connection.query(querystring, [CountryName], function (err, result) {

        if (err) {
            console.log(err);
            return res.status(500).send("Database error: " + err.message);
        }

        if (result.affectedRows == 0) {
            return res.send("Country not found");
        }

        res.redirect('/import0');
    });
});

module.exports = router;

module.exports = router;