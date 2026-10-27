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

    console.log("Vous êtes connecté à votre BDD...");
});

module.exports = connection;