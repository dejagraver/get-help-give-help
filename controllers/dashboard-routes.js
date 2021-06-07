

const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post} = require('../models');


// get all posts for dashboard
router.get('/', (req, res) => {
  console.log(req.session, "session is now on, you are logged in");
  console.log('======================');
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'title',
      'content',
      'createdAt'
    ]
    
  })
    .then(dbPostData => {
     // const posts = dbPostData.map(post => post.get({ plain: true }));
      console.log(dbPostData, "first check")
      res.render('dashboard', {dbPostData, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//this portion needs to be checked for its operations and attached handlebar
/*
router.get('/edit/:id', withAuth, (req, res) => {
  //looking by primary key, only get request, data they want to edit on front end
  Post.findByPk(req.params.id, {
    attributes: [
      'id',
      'title'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'user_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
*/

module.exports = router;
