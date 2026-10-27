/**
 * @file     sql.js
 * @author   Noah Hong Mayers | 202430525@edu.clg.qc.ca
 * @version  1.0
 * @date     October 27 2026
 * @brief    SQL Configuration file
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'paysg20'
});

connection.connect(function(err) {
    if (err) {
        console.log("Database connection failed:", err.message);
        return;
    }

    console.log("Succesfully Connected to Database");
});

module.exports = connection;