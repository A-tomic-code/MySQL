
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
        `SELECT count(s.id_) AS 'alumnos', subjects.title AS 'asignatura', teachers.first_name AS 'Nombre profesor', teachers.last_name AS 'Apellidos profesor'
        FROM students s
        JOIN marks ON (s.id_ = marks.student_id)
        JOIN subjects ON (marks.subject_id = subjects.id_)
        
        JOIN school.groups ON (s.group_id = school.groups.id_)
        JOIN subject_teacher ON (school.groups.id_ = subject_teacher.group_id)
        JOIN teachers ON (subject_teacher.teacher_id = teachers.id_)
        
        GROUP BY title, teachers.first_name, teachers.last_name`
            

        connection.query(sql, (err, result) => {
            err ? console.log(err) : console.log(result);
        });

    }
});