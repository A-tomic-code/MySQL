const express = require('express');
const cors = require('cors');

const errorHanding = require('./error/errorHandling')
const studentsRouter = require('./router/students.router')

const app = express();

app.set('port', process.env.PORT || 5555);

app.use(cors());
app.use(express.json());

//routers
app.use(studentsRouter);


app.use( (req, res, next) => {
    res.status(404);
    res.json({message: '404 Resource not found at ' + req.url})
})

app.use(errorHanding)

module.exports = app;