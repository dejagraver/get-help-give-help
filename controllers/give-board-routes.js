const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('giveboard');
});

module.exports = router;