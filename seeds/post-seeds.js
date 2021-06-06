const { Post } = require('../models');

const postData = [
    {
        id: 1,
        title: 'Test Title for seeded post - Give Help',
        content: 'Test content for seeded post. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        
        category_id: 1,
        is_give_help: true
    },
    {
        id: 2,
        title: 'Test Title for seeded post - Get Help',
        content: 'Test content for seeded post. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      
        category_id: 2,
        is_give_help: false
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
