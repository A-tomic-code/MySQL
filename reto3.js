let mysql = require('mysql2');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '.Kikoloko0',
    database: 'school'
});

connection.connect((err) => {
    if(err){
        console.log(err);
    }else{
        console.log('CONEXION CORRECTA YUHUUU :D');
 
        let sql_borrarAntiguas = `DELETE FROM marks WHERE date < '2012-08-01'`;

        connection.query(sql_borrarAntiguas, (err, result) => {
           
            err ? console.log(err) : console.log(result);

        });

        let sql_selectMarks = "SELECT * FROM marks"

        connection.query(sql_selectMarks, (err, result) => {

            if(err){
                console.log(err);
            }else{
                
                result.forEach(mark => {

                    if(mark.mark < 5 ){
                        mark.mark = 5;
                    }

                    let sql_update = `UPDATE marks SET mark=${mark.mark} WHERE id_=${mark.id_}`
                    connection.query(sql_update, (err, result) => {

                        err ? console.log(err) : console.log(result);

                    });

                });


            }
        });
    }
});