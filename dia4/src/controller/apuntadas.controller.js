const database = require('../database');

function getApuntadas(req, res) {
    let response;

    let student_id = req.query.id;

    if (!student_id) {
        response = {
            error: true,
            code: 400,
            message: 'Missing student ID'
        }

        res.send(response)

    } else {
        database.connect((err) => {
            if (err) {

                response = {
                    error: true,
                    code: 400,
                    message: 'ERROR CONNECTING DATABASE'
                }

            } else {
                let sql = 
                `
                SELECT students.id_ , students.first_name, students.last_name, subjects.title FROM marks
                JOIN students ON (marks.student_id = students.id_)
                JOIN subjects ON (marks.subject_id = subjects.id_) 
                WHERE students.id_ = ${student_id}
                `

                database.query(sql, (error, result) => {

                    if (err) {

                        response = {
                            error: true,
                            code: 400,
                            message: error.message,
                        }
                    } else {

                        console.log(result);

                        response = {
                            error: false,
                            code: 200,
                            message: 'Apuntadas got successfully',
                            data: result
                        }
                    }

                    res.send(response);

                });
            }
        });
    }
}

module.exports = { getApuntadas }