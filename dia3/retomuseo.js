
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "museo",
  password: "alohomora",
});

connection.connect((err) => {
    if(err){
        console.log(err);
    }else{
        
        let sql = `
        SELECT piezas.nombre AS 'Nombre del objeto', ubicacion, fecha_exp_prestamo, autores.nombre, autores.apellidos FROM piezas 
        JOIN autores ON(piezas.id_autor = autores.id)
        WHERE fecha_prestamo < fecha_exp_prestamo
        `
            
        console.log('Objetos en prestamo\n');

        connection.query(sql, (err, result) => {
            err ? console.log(err) : console.log(result);
        });

        sql = `
        SELECT count(id) AS Cantidad, exposicion 
        FROM piezas
        GROUP BY exposicion
        ORDER BY Cantidad DESC
        `
            
        console.log('Situacion de objetos\n');

        connection.query(sql, (err, result) => {
            err ? console.log(err) : console.log(result);
        });

    }
});
