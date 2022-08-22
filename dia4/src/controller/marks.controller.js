const database = require('../database');

function getMark(req, res) {
    let response;

    let sql = `
            SELECT students.id_, students.first_name, students.last_name, subjects.title,
            marks.date, marks.mark
            FROM school.marks
            JOIN students ON(marks.student_id = students.id_)
            JOIN subjects ON(marks.subject_id = subjects.id_)
            `

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
}

function postMark(req, res) {
    let response;

    console.log(req.body);

    let student_id = req.body.student_id;
    let subject_id = req.body.subject_id;
    let date = req.body.date;
    let mark = req.body.mark;

    database.connect((err) => {
        if (err) {
            console.error('ERROR CONNECTING TO DATABASE');
        } else {
            let sql = `INSERT INTO marks(student_id, subject_id, date, mark) VALUES (?, ?, ?, ?)`
            let params = [student_id, subject_id, date, mark]

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

function putMark(req, res) {
    let response;

    let mark_id_ = req.body.id //! OJO CON ESTO (FRONT LO NECESITA lUEGO)

    let student_id = req.body.student_id;
    let subject_id = req.body.subject_id;
    let date = req.body.date;
    let mark = req.body.mark;

    let sql = `
        UPDATE marks SET 
        student_id = ?,
        subject_id = ?,
        date = ?,
        mark = ?
        WHERE id_ = ${mark_id_}
    `
    let params = [student_id, subject_id, date, mark];

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
function deleteMark(req, res) {
    let response;

    let mark_id_ = req.body.id;

    let sql = `
        DELETE FROM marks
        WHERE id_ = ${mark_id_}
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
                        message: 'Data delted successfully'
                    }
                }

                res.send(response);
            });
        }
    });
}



module.exports = {
    getMark,
    putMark,
    postMark,
    deleteMark
};