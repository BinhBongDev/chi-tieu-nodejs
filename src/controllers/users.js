const UserModel = require('../models/User')

exports.getLogin = (req, res) => {
   res.render('users/login', {
      pageTitle:'Đăng nhập',
      path:'/login',
      isLoggedin:req.isLoggedin
   })
}

exports.postLogin = (req, res) => {
   res.send('Post')
}

exports.postRegister = (req, res) => {
   const {username, password} = req.body
   UserModel.findOne({username})
   .then(userDb => {
      if(userDb) {
         return res.status(422).render('users/signUp', {
            path:'/dang-ky',
            pageTitle: 'Đăng ký',
            errMess: 'user exit plz chosse another',
            isLoggedin:req.isLoggedin
           })
      }
      const user = {
         username,
         password,
         post: []
        }
        const newUser = new UserModel(user)
        newUser.save()
        .then(data => {
         res.setHeader('Set-Cookie', 'isLoggedin=true');
        })
        .then(() => {
           res.redirect('/')
        })
   })
   .catch(err => {
    console.log('CHua luu dc db: ', err)
   })
}

exports.getRegister = (req, res) => {
   res.render('users/signUp', {
    path:'/dang-ky',
    pageTitle: 'Đăng ký',
    errMess:'',
    isLoggedin:req.isLoggedin
   })
 }