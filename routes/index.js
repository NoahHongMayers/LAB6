/**
 * @file     app.js
 * @author   Noah Hong Mayers | 202430525@edu.clg.qc.ca
 * @version  1.0
 * @date     September 22 2026
 * @brief    Skeleton for a Node.js application using Express framework
 */

var express = require('express');
var router = express.Router();
var connection = require('../config/sql');


router.get('/', function (req, res) {
  res.render('pages/index', {
  });
});

module.exports = router;