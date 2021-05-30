const router = require('express').Router();

const { User, Post, Category, Comment, UserCategory } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({ attributes: { exclude: ['password'] } })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    User.findOne(
        {
            where: {
                id: req.params.id
            },
            attributes: { exclude: ['password'] },
            include: [
                {
                    model: Post,
                    attributes: ['id', 'title', 'content', 'category_id', 'created_at']
                },
                {
                    model: Category,
                    attributes: ['id', 'name']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'created_at']
                },
                {
                    model: Category,
                    attributes: ['name'],
                    through: UserCategory
                }
            ]
        }
    )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// router.post('/', (req,res) => {
//     User.create(
//         {
//             first_name: req.body.first_name,
//             last_name: req.body.last_name,
//             email: req.body.email,
//             password: req.body.password
//         }
//     )
// })

module.exports = router;