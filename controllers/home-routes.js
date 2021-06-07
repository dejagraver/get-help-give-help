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

router.get('/editpost', (req, res) => {
    if (req.session.loggedIn) {
        // add stylesheet for editpost here
        res.render('editpost', { loggedIn: req.session.loggedIn });
    }
});

router.get('/createpost', (req, res) => {
    res.locals.giveBoardStyleSheet = `giveboardstyle`;
    if (req.session.loggedIn) {
        res.render('createpost', { loggedIn: req.session.loggedIn });
    }
})

module.exports = router;