const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "school",
  password: "alohomora",
});



connection.connect((err) => {
    if(err){
        console.log(err);
    }else{
        
        let sql = 
            `SELECT first_name AS 'Nombre', last_name AS 'Apellido', title AS 'Asignatura' FROM students
            JOIN marks ON (students.id_ = marks.student_id)
            JOIN subjects ON (marks.id_ = subjects.id_)`;

        connection.query(sql, (err, result) => {
            err ? console.log(err) : console.log(result);
        });

    }
});