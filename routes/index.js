/**
 * @file     app.js
 * @author   Noah Hong Mayers | 202430525@edu.clg.qc.ca
 * @version  1.0
 * @date     September 22 2026
 * @brief    Skeleton for a Node.js application using Express framework
 */

var express = require('express');
var router = express.Router();
var connection = require('./sql');


router.get('/', function (req, res) {
  res.render('pages/index', {
    query: -1,
    rows: [],
    fields: []
  });
});

var queries = [
  'SELECT * FROM caracpays',

  'SELECT * FROM caracpays WHERE NbHab > 100000000 AND DensitePop > 100',

  'SELECT * FROM caracpays WHERE dejaVisite = "O" AND (PIB > 2000 OR NbHab > 300000000)',

  "SELECT * FROM caracpays WHERE Pays LIKE 'a%' AND Capitale LIKE '%a%'",

  'SELECT * FROM caracpays WHERE (dejaVisite = "N" AND (pib IS NULL OR DensitePop < 50)) OR (dejaVisite = "O" AND NbHab < 50000000)',

  'SELECT * FROM caracpays WHERE PIB IS NOT NULL ORDER BY PIB DESC LIMIT 1',

  'SELECT * FROM caracpays WHERE NbHab IS NOT NULL ORDER BY NbHab ASC LIMIT 1'
];

router.get('/import:num', function (req, res) {

  var number = Number(req.params.num);

  if (number < 0 || number > 6 || !Number.isInteger(number)) {
    return res.status(404).send("Unknown query");
  }

  var querystring = queries[number];

  connection.query(querystring, function (err, rows, fields) {

    if (err) {
      console.log(err);
      return res.status(500).send("Database error: " + err.message);
    }

    res.render('pages/index', {
      query: number,
      rows: rows,
      fields: fields
    });
  });
});

module.exports = router;