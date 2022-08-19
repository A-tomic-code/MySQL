let mysql = require("mysql2");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "alohomora",
  database: "school",
});

let sql_idOrMark = `SELECT * FROM marks WHERE (id_ BETWEEN 1 AND 20) OR (mark > 8 AND date < '2022-01-01')`;

connection.query(sql_idOrMark, (err, res) => {
    console.log('PUNTO 1 \n');
    err ? console.log(err) : console.log(res);
});

let sql_mediaAsignaturas = `SELECT subject_id, avg(mark) FROM marks WHERE date BETWEEN '2022-01-01' AND '2022-12-31' GROUP BY subject_id`;

connection.query(sql_mediaAsignaturas, (err, res) => {
    console.log('PUNTO 2 \n');
    err ? console.log(err) : console.log(res);
});

let sql_mediaAlumnos = `SELECT student_id, avg(mark) FROM marks WHERE date BETWEEN '2022-01-01' AND '2022-12-31' GROUP BY student_id`;

connection.query(sql_mediaAlumnos, (err, res) => {
    console.log('PUNTO 3 \n');
    err ? console.log(err) : console.log(res);
});

