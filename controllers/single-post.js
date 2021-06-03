const router = require('express').Router();

router.get('/', (req, res) => {
    res.locals.homePageStyleSheet = `style`;
    res.render('homepage');
});

router.get('/login', (req, res) => {
    res.locals.loginStyleSheet = `loginstyle`;
    res.render('login');
  });
  
module.exports = router;