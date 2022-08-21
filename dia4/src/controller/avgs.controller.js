const database = require('../database');

function getAVG(req, res) {
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
                let sql = `SELECT AVG(mark) AS avg FROM marks WHERE ID_ = ${student_id}`

                database.query(sql, (error, result) => {

                    if (err) {

                        response = {
                            error: true,
                            code: 400,
                            message: error.message,
                        }
                    } else {

                        response = {
                            error: false,
                            code: 200,
                            message: 'Average got successfully',
                            data: result[0].avg
                        }
                    }

                    res.send(response);

                });
            }
        });
    }
}

module.exports = {getAVG}