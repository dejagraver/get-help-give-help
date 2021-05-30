const router = require('express').Router();
const { User, Post, Category, Comment, UserCategory } = require('../../models');

router.get('/', (req,res) => {
    Post.findAll()
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;