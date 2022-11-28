const express = require('express');

const router = express.Router();

const usersControllers = require('../controllers/users')

const takeCookie = require('../middleware/condition')

router.get('/dang-nhap', takeCookie,usersControllers.getLogin)

router.post('/login', usersControllers.postLogin)

router.get('/dang-ky', usersControllers.getRegister)

router.post('/dang-ky', usersControllers.postRegister)


module.exports = router;