exports.getHome = (req, res) => {
  console.log(req.isLoggedin)
    res.render('layouts/home', {
        pageTitle: 'Home',
        path: '/',
        isLoggedin:req.isLoggedin
      })
}

exports.getThu = (req, res) => {
    res.render('layouts/thu', {
        pageTitle: 'Thu',
        path: '/thu',
        isLoggedin:req.isLoggedin
      })
}

exports.getChi = (req, res) => {
    res.render('layouts/chi', {
        pageTitle: 'Chi',
        path: '/chi',
        isLoggedin:req.isLoggedin
      })
}