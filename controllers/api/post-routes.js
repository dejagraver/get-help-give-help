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

router.get('/:id', (req,res) => {
    Post.findOne(
        {
            where: {
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
                }
            ]
        }
    )
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({message: 'No post found with that id.'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// may need to accomodate for session
router.post('/', (req,res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.body.user_id,
        category_id: req.body.category_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;