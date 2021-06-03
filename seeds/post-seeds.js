const { Post } = require('../models');

const postdata = [
  {
    title: 'Pizza',
    content: 'We are offering free slices of pizza on this Saturday',
    user_id: 1
  },
  {
    title: 'Volunteer',
    content: 'I am willing to volunteer as Payroll Assistant',
    user_id: 2
  },
  {
    title: 'Volunteer Experience',
    content: 'I am a sculptor and willing to create one small piece of sculpture for no cost',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

