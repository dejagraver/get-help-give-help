const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    first_name: 'Heather',
    last_name: 'Swift',
    email: 'heatherswift123@yahoo.com'
  },
  {
    first_name: 'Gurkirat',
    last_name: 'Saini',
    email: 'Gurs35667@aol.com'
  },
  {
    first_name: 'Deja',
    last_name: 'Graver',
    email: 'dejaworld77@gmail.com'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
