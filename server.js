require('dotenv').config()
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT
const URL = process.env.URL


const routeLayouts = require('./src/routes/layout')
const routesUser = require('./src/routes/users')

app.use(express.json({ extended: false }));
app.use(express.urlencoded({extended: true}))

// config static file
app.use(express.static(path.join(__dirname, 'src/public')));

app.set('view engine', 'ejs');
app.set('views', 'src/pages');

// routes
app.use(routeLayouts)
app.use(routesUser)


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
