const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    res.locals.homePageStyleSheet = `style`;
    res.render('homepage', { loggedIn: req.session.loggedIn });
});

router.get('/login', (req, res) => {
    res.locals.loginStyleSheet = `loginstyle`;
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/edit/:id', (req, res) => {
    if (req.session.loggedIn) {
        // add stylesheet for editpost here
        Post.findOne(
            {
                where: {
                    id: req.params.id
                },
                include: [
                    {
                        model: Comment,
                        attributes: ['id', 'comment_text', 'user_id', 'post_id'],
                        include: {
                            model: User,
                            attributes: ['first_name', 'last_name', 'email']
                        }
                    },
                    {
                        model: User,
                        attributes: ['first_name', 'last_name', 'email']
                    }
                ]
            }
        )
            .then(dbPostData => {
                if (!dbPostData) {
                    res.status(404).end();
                }
                const post = dbPostData.get({ plain: true });

                res.render('editpost', { post, loggedIn: true })
            })
            .catch(err => {
                res.status(500).json(err);
            })
        // res.render('editpost', { loggedIn: req.session.loggedIn });
    }
});

router.get('/createpost', (req, res) => {
    if (req.session.loggedIn) {
        res.render('createpost', { loggedIn: req.session.loggedIn });
    }
})

module.exports = router;