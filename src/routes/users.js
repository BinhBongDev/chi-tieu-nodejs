const express = require('express');

const router = express.Router();

const usersControllers = require('../controllers/users')

router.get('/login', usersControllers.getLogin)

router.post('/login', usersControllers.postLogin)

router.get('/register', usersControllers.getRegister)

router.post('/register', usersControllers.postRegister)


module.exports = router;