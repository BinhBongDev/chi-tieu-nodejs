const takeCookie = (req, res, next) => {
    if(req.headers.cookie) {
        const cookiesArray = req.headers.cookie.split(';')[0].split("=")[1];
        if(cookiesArray === "true") {
            req.isLoggedin = true
        }
    } else {
        res.redirect('/dang-ky')
    }
    next()

    
}

module.exports = takeCookie