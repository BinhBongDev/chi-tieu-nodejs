const express = require('express');

const router = express.Router();

const layoutControllers = require('../controllers/layout')

const takeCookie = require('../middleware/condition')

router.get('/',takeCookie, layoutControllers.getHome)

router.get('/thu', takeCookie, layoutControllers.getThu)

router.get('/chi', takeCookie,layoutControllers.getChi)


module.exports = router;