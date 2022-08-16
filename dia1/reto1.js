let mysql = require("mysql2");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "alohomora",
  database: "codenotch",
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Conectado !!!!");

    let sql_addColumn =
      "ALTER TABLE `codenotch`.`modulos` ADD COLUMN `columna_extra` VARCHAR(45) NULL AFTER `stack_part`";

    connection.query(sql_addColumn, (err, result) => {
        
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }

    });

    let sql_remColumn = "ALTER TABLE `codenotch`.`alumnos` DROP COLUMN `edad`";

    connection.query(sql_remColumn, (err, result) => {
        
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }

    });

    let sql_dropTable = "DROP TABLE `codenotch`.`profesores`";

    connection.query(sql_dropTable, (err, result) => {
        
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }

    });

  }
});
