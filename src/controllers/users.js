const UserModel = require('../models/User')

exports.getLogin = (req, res) => {
   res.render('users/login', {
      pageTitle:'Đăng nhập',
      path:'/login'
   })
}

exports.postLogin = (req, res) => {
   res.send('Post')
}

exports.postRegister = (req, res) => {
   const {username, password} = req.body
   const user = {
    username,
    password,
    post: []
   }

   const newUser = new UserModel(user)
   newUser.save()
   .then(data => {
    res.send(data)
    res.redirect('/dang-nhap')
   })
   .catch(err => {
    console.log('CHua luu dc db: ', err)
   })
}

exports.getRegister = (req, res) => {
   res.render('users/signUp', {
    path:'/dang-ky',
    pageTitle: 'Đăng ký'
   })
 }