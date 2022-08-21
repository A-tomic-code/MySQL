const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '--password-here--', //! PONER PASSWORD
    database: 'school'
});

module.exports = connection;