const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Yes I am interested',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'That is great!',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Reach me at abc@gmail.com',
    user_id: 3,
    post_id: 3
  }
];

//check if following needed 
const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;

//All these need to be tested to make sure this data needs not to align with single model structure
