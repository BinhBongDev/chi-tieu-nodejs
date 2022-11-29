exports.getHome = (req, res) => {
    res.render('layouts/home', {
        pageTitle: 'Home',
        path: '/',
      })
}

exports.getThu = (req, res) => {
    res.render('layouts/thu', {
        pageTitle: 'Thu',
        path: '/thu',
      })
}

exports.getChi = (req, res) => {
    res.render('layouts/chi', {
        pageTitle: 'Chi',
        path: '/chi',
      })
}