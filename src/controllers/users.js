const UserModel = require('../models/User')

const {takeUserId} = require('../middleware/dataUser')

exports.getLogin = (req, res) => {
   res.render('users/login', {
      pageTitle:'Đăng nhập',
      path:'/login',
      errMess:''
   })
}

exports.postLogin = (req, res) => {
   const {username, password} = req.body
   UserModel.findOne({username})
   .then(data => {
      if(!data) {
         return res.render('users/login', {
            pageTitle:'Đăng nhập',
            path:'/login',
            errMess:'User not Found'
         })
      }

      if(password !==  data.password) {
         return res.render('users/login', {
            pageTitle:'Đăng nhập',
            path:'/login',
            errMess:'Pass not match'
         })
      }
      req.session.isLoggedIn = true;
      req.session.user = data;
      return req.session.save(err => {
         res.redirect('/')
      })
   })
   .catch(err => console.log('Loi dang nhap: ', err))
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
         req.session.isLoggedIn = true;
         req.session.user = data;
         return req.session.save(err => {
            res.redirect('/')
         })
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
   })
 }

exports.logoutUser = (req, res) => {
   req.session.destroy((err) => {
      res.redirect('/dang-nhap');
  });
}