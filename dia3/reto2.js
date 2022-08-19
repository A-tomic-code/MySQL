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
        `SELECT first_name AS 'Nombre', last_name AS 'Apellido', title AS 'Asignatura' FROM teachers
        JOIN subject_teacher ON (teachers.id_ = subject_teacher.teacher_id)
        JOIN subjects ON (subject_teacher.subject_id = subjects.id_)`
            

        connection.query(sql, (err, result) => {
            err ? console.log(err) : console.log(result);
        });

    }
});