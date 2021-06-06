const router = require('express').Router();
const { Post, User, Comment, Category } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);

    Post.findAll(
        {
            where: {
                category_id: 1
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
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('giveboard', { posts, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })

    res.locals.giveBoardStyleSheet = `giveboardstyle`;

});

router.get('/:id', (req, res) => {
    console.log(req.session);

    Post.findOne(
        {
            where: {
                category_id: 1,
                id: req.params.id
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
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with that id.' });
                return;
            }
            res.locals.giveBoardStyleSheet = 'giveboardstyle';
            const post = dbPostData.get({ plain: true });

            res.render('singlepost', { post, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

module.exports = router;