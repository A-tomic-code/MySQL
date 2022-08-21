const Router = require('express');
const router = Router();

const apuntadasCtrl = require('../controller/apuntadas.controller')

router.get('/apuntadas', apuntadasCtrl.getApuntadas);

module.exports = router