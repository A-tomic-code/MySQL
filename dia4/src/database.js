const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
<<<<<<< HEAD
    password: 'alohomora',
=======
    password: '--password-here--', //! PONER PASSWORD
>>>>>>> 0b54bd178414beb78f7677fd005480490a272cc0
    database: 'school'
});

module.exports = connection;