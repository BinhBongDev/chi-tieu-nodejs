const express = require('express');

const router = express.Router();

const usersControllers = require('../controllers/users')

router.get('/dang-nhap', usersControllers.getLogin)

router.post('/login', usersControllers.postLogin)

router.get('/dang-ky', usersControllers.getRegister)

router.post('/register', usersControllers.postRegister)


module.exports = router;