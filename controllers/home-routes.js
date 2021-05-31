const router = require('express').Router();

router.get('/', (req, res) => {
    res.locals.homePageStyleSheet = `style`;
    res.render('homepage');
});

module.exports = router;