const router = require('express').Router();

router.get('/', (req, res) => {
    res.locals.giveBoardStyleSheet = `giveboardstyle`;
    res.render('giveboard');
});

module.exports = router;