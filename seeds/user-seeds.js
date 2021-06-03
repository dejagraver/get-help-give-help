const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Heather',
    password: 'heatherswift123'
  },
  {
    username: 'GurkiratS',
    password: 'Gurs35667'
  },
  {
    username: 'Deja',
    password: 'dejaworld77'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
