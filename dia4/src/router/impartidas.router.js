const Router = require('express');
const router = Router();

const impartidasCtrl = require('../controller/impartidas.controller')

router.get('/impartidas', impartidasCtrl.getImpartidas);

module.exports = router;