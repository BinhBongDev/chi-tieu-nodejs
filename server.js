const path = require('path')
const express = require('express')
const app = express()
const port = 8080


// config static file
app.use(express.static(path.join(__dirname, 'src/public')));

app.set('view engine', 'ejs');
app.set('views', 'src/pages');

app.get('/', (req, res) => {
  res.render('layouts/home', {
    pageTitle: 'Home',
    path: '/'
  })
})

app.get('/thu', (req, res) => {
  res.render('layouts/thu', {
    pageTitle: 'Thu',
    path: '/thu'
  })
})

app.get('/chi', (req, res) => {
  res.render('layouts/chi', {
    pageTitle: 'Chi',
    path: '/chi'
  })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })