let mysql = require("mysql2");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "alohomora",
  database: "school",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("CONECTADO !!!!");

    console.log("Media de los estudiantes de la asignatura 1");

    let sql_media = `SELECT student_id, AVG(mark) AS "Media" , subject_id AS "Asignatura"
        FROM marks WHERE subject_id = 1
        GROUP BY student_id`;

    connection.query(sql_media, (err, result) => {
      err ? console.log(err) : console.log(result);
    });

    console.log("Todos los campos de groups");

    let sql_groups = `SELECT * FROM school.groups`;

    connection.query(sql_groups, (err, result) => {
      err ? console.log(err) : console.log(result);
    });

    console.log("Borrar notas mayores de 5 y del anyo pasado");

    let sql_eliminarNotas = `DELETE FROM marks WHERE mark > 5 AND (date < '2022-12-31' AND date > '2021-01-01')`;

    connection.query(sql_eliminarNotas, (err, result) => {
      err ? console.log(err) : console.log(result);
    });

    console.log("obtener estudiantes de este anyo");

    let sql_getEsteAnyo = `SELECT * FROM students WHERE anyo_ingreso BETWEEN '2022-01-01' AND '2022-12-31'`;

    connection.query(sql_getEsteAnyo, (err, result) => {
      err ? console.log(err) : console.log(result);
    });

    let subject_teacherCount = 'SELECT subject_id, count(teacher_id) FROM subject_teacher GROUP BY subject_id';

    connection.query(subject_teacherCount, (err, res) => {
      err ? console.log(err) : console.log(result);
    });
  }
});
