const path = require('path')
const express = require('express')
const app = express()
const port = 8080

const routeLayouts = require('./src/routes/layout')

// config static file
app.use(express.static(path.join(__dirname, 'src/public')));

app.set('view engine', 'ejs');
app.set('views', 'src/pages');

// routes
app.use(routeLayouts)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })