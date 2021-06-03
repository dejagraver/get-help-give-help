const { Post } = require('../models');

const postdata = [
  {
    title: 'Pizza',
    post_text: 'We are offering free slices of pizza on this Saturday',
    user_id: 1
  },
  {
    title: 'Volunteer',
    post_text: 'I am willing to volunteer as Payroll Assistant',
    user_id: 2
  },
  {
    title: 'Volunteer Experience',
    post_text: 'I am a sculptor and willing to create one small piece of sculpture for no cost',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

