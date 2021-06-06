const { Comment } = require('../models');

const commentdata = [
  {
    id: 1, 
    comment_text: 'Yes I am interested'
    
    
  },
  {
    id: 2,
    comment_text: 'That is great!'
    
   
  },
  {
    id: 3,
    comment_text: 'Reach me at abc@gmail.com'
    
    
  }
];

//check if following needed 
const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;

//All these need to be tested to make sure this data needs not to align with single model structure
