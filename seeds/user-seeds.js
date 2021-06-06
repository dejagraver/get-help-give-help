const { User } = require('../models');

const userData = [
    {
        first_name: 'Test1',
        last_name: 'User1',
        email: 'test1.user1@email.com'
    }
];

const seedCategories = () => User.bulkCreate(userData);

module.exports = seedCategories; 