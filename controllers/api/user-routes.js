
const router = require('express').Router();
const { User, Post, Category, Comment, UserCategory } = require('../../models');
const firebase = require('firebase/app');
require('firebase/auth');

var firebaseConfig = {
    apiKey: "AIzaSyD4a1zBHTz5WCT__Y7IaGvMFKlS03nknJI",
    authDomain: "get-help-give-help-3fc47.firebaseapp.com",
    projectId: "get-help-give-help-3fc47",
    storageBucket: "get-help-give-help-3fc47.appspot.com",
    messagingSenderId: "83016709803",
    appId: "1:83016709803:web:8d79f75beb5c5f006769ee",
    measurementId: "G-27VGBMGRRV"
};

firebase.initializeApp(firebaseConfig);


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

// signup route
router.post('/', (req, res) => {
    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then(userCredentials => {
            console.log(userCredentials);
            res.json(userCredentials);

            User.create(
                {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email
                }
            )
                .then(dbUserData => console.log(dbUserData))
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });


});

// login route
router.post('/login', (req, res) => {
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .then(userCredentials => {
            // console.log(userCredentials);
            // res.json(userCredentials);

            if (!userCredentials) {
                res.status(404).json({ message: 'No user found with that email address! Please sign up.' });
                return;
            }

            // storing user information in session cookies
            req.session.save(() => {
                req.session.user_id = userCredentials.user.uid;
                req.session.username = userCredentials.user.email;
                req.session.loggedIn = true;

                res.json({ user: userCredentials, message: 'You are now logged in!' });
            });
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
});

//logout route
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {

        console.log('this works');

        firebase.auth().signOut()
            .then(() => {
                req.session.destroy(() => {
                    res.status(204).json({ message: 'Successfully logged out' }).end();
                })
            })
            .catch(err => {
                console.log(err);
                res.status(404).json(err);
            })




        // req.session.destroy(() => {
        //     firebase.auth().signOut().then(() => {
        //         res.status(204).json({ message: 'You have been successfully logged out!' }).end();
        //     }).catch(err => {
        //         console.log(err);
        //         res.status(404).end();
        //     });
        // })
    } else {
        res.status(404).end();
    }
})


module.exports = router;




/*
const router = require('express').Router();
const { User, Post, Category, Comment, UserCategory } = require('../../models');
const firebase = require('firebase/app');
require('firebase/auth');

var firebaseConfig = {
    apiKey: "AIzaSyD4a1zBHTz5WCT__Y7IaGvMFKlS03nknJI",
    authDomain: "get-help-give-help-3fc47.firebaseapp.com",
    projectId: "get-help-give-help-3fc47",
    storageBucket: "get-help-give-help-3fc47.appspot.com",
    messagingSenderId: "83016709803",
    appId: "1:83016709803:web:8d79f75beb5c5f006769ee",
    measurementId: "G-27VGBMGRRV"
};

firebase.initializeApp(firebaseConfig);


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

// signup route
router.post('/', (req, res) => {
    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then(userCredentials => {
            console.log(userCredentials);
            res.json(userCredentials);

            User.create(
                {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email
                }
            )
                .then(dbUserData => console.log(dbUserData))
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });



    // User.create(
    //     {
    //         first_name: req.body.first_name,
    //         last_name: req.body.last_name,
    //         email: req.body.email,
    //         password: req.body.password
    //     }
    // )
    //     .then(dbUserData => res.json(dbUserData))
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json(err);
    //     });

});

// login route
router.post('/login', (req, res) => {
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .then(userCredentials => {
            console.log(userCredentials);
            res.json(userCredentials);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
});

// research making PUT requests to firebase api
// router.put('/email', (req, res) => {
//     User.update(
//         {
//             first_name: req.body.first_name
//         }
//     )
// })

module.exports = router;
*/