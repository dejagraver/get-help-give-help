//this also acts as homepage so will need something similar to home routes rendering to giveboard, compare to this)

const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post} = require('../models');

router.get('/', (req, res) => {
    //this line may need revision
    console.log(req.session, "session is now on, you are logged in");
  console.log('======================');
  Post.findAll({
    
    attributes: [
      'id',
      'title',
      'content'
    ]
  })
    .then(dbPostData => {
        console.log(dbPostData, "this is the real data")
        //this data is begin read but not appearing on giveboard because of login control issue
  //    const posts = dbPostData.map(post => post.get({ plain: true }));
      res.locals.giveBoardStyleSheet = `giveboardstyle`;
      res.render('giveboard', { loggedIn: req.session.loggedIn });
     })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
      attributes: [
        'id',
        'title',
        'content',
        'createdAt'
      ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
  //the following is link to handlebar for homepage
  console.log(posts);
        res.render('giveboard', { posts });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;







