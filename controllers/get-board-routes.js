const router = require('express').Router();

router.get('/', (req, res) => {
    res.locals.getBoardStyleSheet = `getboardstyle`;
    res.render('getboard', { loggedIn: req.session.loggedIn });
});

module.exports = router;