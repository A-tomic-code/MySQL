const database = require('../database');


function getImpartidas(req, res){
    let response;
    
    let sql =
    `
    SELECT teachers.first_name , teachers.last_name, subjects.title, subject_teacher.teacher_id FROM subject_teacher
    JOIN teachers ON (subject_teacher.teacher_id = teachers.id_)
    JOIN subjects ON (subject_teacher.subject_id = subjects.id_)
    `
    if(req.query.id){
        sql += `WHERE teachers.id_ = ${req.query.id}`
    }

    console.log(sql);

    database.connect( (err) => {
        
        if(err){

            response = {
                error : true,
                code: 400,
                message: 'ERROR CONNECTING DATABASE --> ' + err.message
            }

            res.send(response);

        }else{
            database.query(sql, (error, result) => {
                
                if(err){

                    response = {
                        error: true,
                        code: 400,
                        message: 'ERR COLLECTING DATA --> ' + error.message,
                        data: result
                    }

                }else{

                    console.log(result);
                    response = {
                        error: false,
                        code: 200,
                        message: 'IMPARTIDAS SUCCESSFULLY GOTTEN -->',
                        data: result
                    }
                }
    
                res.send(response); 
            });
        }
    });
}

module.exports = {getImpartidas}