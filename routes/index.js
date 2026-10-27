/**
 * @file     app.js
 * @author   Noah Hong Mayers | 202430525@edu.clg.qc.ca
 * @version  1.0
 * @date     September 22 2026
 * @brief    Skeleton for a Node.js application using Express framework
 */

var express = require('express');// Import the Express framework
var connection = require('./sql');
var router = express.Router();// Create a new router object to handle routes


router.get('/', function (req, res, next) {
  res.render('pages/index', {
    title: 'Home',
    rows: [],
    fields: []
  });
});


router.get('/import', function (req, res) {

  var querystring = 'SELECT * FROM caracpays';

  connection.query(querystring, function (err, rows, fields) {

    if (!err) {
      console.log("Request Approved");
      console.log(rows);

      res.render('pages/index', {
        rows: rows,
        fields: fields
      });
    }
    else {
      console.log("SQL Error:", err);
      res.status(500).send("Database error: " + err.message);
    }

  });
});

module.exports = router;// Export the router object to be used in other parts of the application
