require('dotenv').config()
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const UserModel = require('./src/models/User')
const app = express()
const port = process.env.PORT
const URL = process.env.URL

const store = new MongoDBStore({
  uri: URL,
  collection: 'sessions',
});

const routeLayouts = require('./src/routes/layout')
const routesUser = require('./src/routes/users')

app.use(express.json({ extended: false }));
app.use(express.urlencoded({extended: true}))

// config static file
app.use(express.static(path.join(__dirname, 'src/public')));

app.set('view engine', 'ejs');
app.set('views', 'src/pages');

// sections

app.use(
  session({
      secret: 'my secret',
      resave: false,
      saveUninitialized: false,
      store: store,
  })
);

app.use((req, res, next) => {
  res.locals.isLoggedin= req.session.isLoggedIn
  next();
});

app.use((req, res, next) => {
  if (!req.session.user) {
      return next();
  }
  UserModel.findById(req.session.user._id)
      .then((user) => {
          if (!user) {
              return next();
          }
          req.user = user;
          res.locals.name = user.username
          next();
      })
      .catch((err) => {
          next(new Error(err));
      });
});

// routes
app.use(routesUser)
app.use(routeLayouts)


mongoose.connect(URL, {

})
.then(() => {
  console.log('KET NOI DB SUCEESS')
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})
.catch(err => {console.log('Loi ket noi DB; ', err)
process.exit(1)
})
