const router = require('express').Router();

router.get('/', (req, res) => {
    res.locals.getBoardStyleSheet = `getboardstyle`;
    res.render('getboard');
});

module.exports = router;