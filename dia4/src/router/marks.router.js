const marksCtrl = require('../controller/marks.controller');
const Router = require('express');
const router = Router();

router.get('/notas', marksCtrl.getMark);

router.post('/notas', marksCtrl.postMark);

router.put('/notas', marksCtrl.putMark);

router.delete('/notas', marksCtrl.deleteMark);

module.exports = router