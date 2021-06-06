const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Test Comment - Give Help',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Test Comment - Get Help',
        user_id: 1,
        post_id: 2
    }
];

const seedCategories = () => Comment.bulkCreate(commentData);

module.exports = seedCategories;