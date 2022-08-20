const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '.Kikoloko0',
    database: 'school'
});

module.exports = connection;