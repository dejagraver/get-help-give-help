const { Post } = require('../models');

const postData = [
    {
        title: 'Test Title for seeded post - Give Help',
        content: 'Test content for seeded post. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        user_id: 1,
        category_id: 1,
        is_give_help: true
    },
    {
        title: 'Test Title for seeded post - Get Help',
        content: 'Test content for seeded post. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        user_id: 1,
        category_id: 2,
        is_give_help: false
    },
    {
        title: 'Test mctesterson',
        content: 'Test content for seeded post. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        user_id: 1,
        category_id: 2,
        is_give_help: false
    }
];

const seedCategories = () => Post.bulkCreate(postData);

module.exports = seedCategories;

