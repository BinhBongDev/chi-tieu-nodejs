const UserModel = require('../models/User')

exports.getLogin = (req, res) => {
    res.send('LOGIN')
}

exports.postLogin = (req, res) => {
   res.send('Post')
}

exports.postRegister = (req, res) => {
   const {username, password} = req.body
   const user = {
    username,
    password,
    post: [
        {title: 'Ăn sáng', money: '30k', dateUser:"27-11-22"}
    ]
   }

   const newUser = new UserModel(user)
   newUser.save()
   .then(data => {
    console.log(data)
    res.send(data)
   })
   .catch(err => {
    console.log('CHua luu dc db: ', err)
   })
}

exports.getRegister = (req, res) => {
    res.send('Get register')
 }