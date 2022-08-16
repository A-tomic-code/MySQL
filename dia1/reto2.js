let mysql = require('mysql2')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '.Kikoloko0',
    database: 'school'
});

connection.connect((err) => {
    if(err){
        console.log(error);
    }else{
        console.log('Conectado al servidor !!!!');


        let sql_marksToZero = "UPDATE marks SET mark=0";
        let sql_nameAndLastName = "SELECT first_name, last_name FROM students";


        connection.query(sql_marksToZero, (err, result) => {

            if(err){
                console.log(err);
            }else{
                console.log(result);
            }

        });


        connection.query(sql_nameAndLastName, (err, result) => {

            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }

        });


    }
});