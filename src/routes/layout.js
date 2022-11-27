const express = require('express');

const router = express.Router();

const layoutControllers = require('../controllers/layout')

router.get('/', layoutControllers.getHome)

router.get('/thu', layoutControllers.getThu)

router.get('/chi', layoutControllers.getChi)


module.exports = router;