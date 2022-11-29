const express = require('express');

const router = express.Router();

const usersControllers = require('../controllers/users')

router.get('/dang-nhap',usersControllers.getLogin)

router.post('/dang-nhap', usersControllers.postLogin)

router.get('/dang-ky', usersControllers.getRegister)

router.post('/dang-ky', usersControllers.postRegister)

router.post('/logout', usersControllers.logoutUser)


module.exports = router;