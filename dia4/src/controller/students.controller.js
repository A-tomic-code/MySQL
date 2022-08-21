const database = require('../database');

function getStudent(req, res) {
    let response;
    let sql = 'SELECT * FROM students';

    if (req.query.id) {
        sql += ` WHERE id_ = ${req.query.id}`
    }

    database.connect((err) => {
        if (err) {
            console.error('ERROR CONNECTING TO DATABASE');
        } else {
            database.query(sql, (err, result) => {

                if (!err) {

                    response = {
                        error: false,
                        code: 200,
                        message: 'Data collected from DB',
                        data: result
                    }

                } else {
                    response = {
                        error: true,
                        code: 400,
                        message: 'ERROR COLLECTING DATA FROM DB --> ' + err.message,
                    }

                }

                res.send(response);
            });
        }
    })


    //EN ESTA LINEA RESPONSE SIEMPRE ES UNDEFINED CREO QUE ES POR TEMAS DE SINCRONIA,
    //PREGUNTAR A LOS PROFES EL LUNES !!!!!!

}

function postStudent(req, res) {
    let response;

    // AQUI ABAJO SE VEN LOS NOMBRES DE LOS CAMPOS QUE HAY EN LA REQUEST
    // Y QUE LUEGO NECESITO RECORDAR PARA HACER EL FRONT (NO TE OLVIDES DANIEL QUE LUEGO TE ESTRESAS)
    console.log(req.body);

    let student_first_name = req.body.first_name;
    let student_last_name = req.body.last_name;
    let student_group_id = req.body.group_id;

    database.connect((err) => {
        if (err) {
            console.error('ERROR CONNECTING TO DATABASE');
        } else {
            let sql = `INSERT INTO students(first_name, last_name, group_id) VALUES (?, ?, ?)`
            let params = [student_first_name, student_last_name, student_group_id]

            database.query(sql, params, (error, result) => {
                if (error) {

                    response = {
                        error: true,
                        code: 400,
                        message: error.message
                    }
                } else {

                    response = {
                        error: true,
                        code: 200,
                        message: 'Data successfully wrote on DB'
                    }
                }

                res.send(response);
            });
        }
    })

}

function putStudent(req, res) {

    console.log('PUT');
    console.log('-------------');
    console.log(req.body);
    console.log('\n');

    let response;

    let student_id_ = req.body.id //! OJO CON ESTO PARA REFERENCIARLO DESDE EL FRONT LUEGO

    let student_first_name = req.body.first_name;
    let student_last_name = req.body.last_name;
    let student_group_id = req.body.group_id;

    let sql = `
        UPDATE students SET 
        first_name = ?,
        last_name = ?,
        group_id = ?
        WHERE (id_ = ${student_id_})
    `
    let params = [student_first_name, student_last_name, student_group_id];

    database.connect((err) => {
        if (err) {
            console.error('ERROR CONNECTING TO DATABASE');
        } else {
            database.query(sql, params, (error, result) => {
                if (error) {

                    response = {
                        error: true,
                        code: 400,
                        message: error.message
                    }

                } else {

                    response = {
                        error: false,
                        code: 200,
                        message: 'Data modified successfully'
                    }
                }

                res.send(response)
            });
        }
    });

}
function deleteStudent(req, res) {
    let response;

    let student_id_ = req.body.id;

    let sql = `
        DELETE FROM students
        WHERE id_ = ${student_id_}
    `

    database.connect( (err) => {
        if(err){
            console.error(err);
        }else{
            database.query(sql, (error, result) => {
                if(error){

                    response = {
                        error: true,
                        code: 400,
                        message: error.message
                    }
                }else{

                    response = {
                        error: false,
                        codigo: 400,
                        message: 'Data deleted successfully'
                    }
                }

                res.send(response);
            });
        }
    });
}



module.exports = {
    getStudent,
    putStudent,
    postStudent,
    deleteStudent
};