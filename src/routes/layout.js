const express = require('express');

const router = express.Router();

const layoutControllers = require('../controllers/layout')

const condition = require('../middleware/condition')


router.get('/', condition,layoutControllers.getHome)

router.get('/thu', condition, layoutControllers.getThu)

router.get('/chi', condition,layoutControllers.getChi)


module.exports = router;