const router = require('express').Router();

// const apiRoutes = require('/api');
const homeRoutes = require('./home-routes.js');

// board route connections
const giveBoardRoutes = require('./give-board-routes.js');
const getBoardRoutes = require('./get-board-routes.js');

router.use('/', homeRoutes);
router.use('/giveboard', giveBoardRoutes);
router.use('/getboard', getBoardRoutes);
// router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;