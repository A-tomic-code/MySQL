const studentsCtrl = require('../controller/students.controller');
const Router = require('express');
const router = Router();

router.get('/alumnos', studentsCtrl.getStudent);
router.post('/alumnos', studentsCtrl.postStudent);
router.put('/alumnos', studentsCtrl.putStudent);
router.delete('/alumnos',studentsCtrl.deleteStudent);

module.exports = router