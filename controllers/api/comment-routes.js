const router = require('express').Router();
const { User, Post, Category, Comment, UserCategory } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll({})
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// add session handling for post and delete routes

module.exports = router;