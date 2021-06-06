const router = require('express').Router();
const { Post, User, Comment, Category } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);

    Post.findAll(
        {
            where: {
                category_id: 2
            },
            include: [
                {
                    model: User,
                    attributes: ['id', 'first_name', 'last_name', 'email']
                },
                {
                    model: Category,
                    attributes: ['id', 'name']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'user_id', 'post_id']
                }
            ]
        }
    )
        .then(dbPostData => {
            console.log(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })


    res.locals.getBoardStyleSheet = `getboardstyle`;
    res.render('getboard', { loggedIn: req.session.loggedIn });
});

module.exports = router;