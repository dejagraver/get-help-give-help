const router = require('express').Router();

router.get('/', (req, res) => {
    res.locals.homePageStyleSheet = `style`;
    res.render('homepage', { loggedIn: req.session.loggedIn });
});

router.get('/login', (req, res) => {
    res.locals.loginStyleSheet = `loginstyle`;
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;