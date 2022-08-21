const Router = require('express');
const router = Router();

const avgsCtrl = require('../controller/avgs.controller');

router.get('/media', avgsCtrl.getAVG)

module.exports = router;