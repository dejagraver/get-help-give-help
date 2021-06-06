const { UserCategory } = require('../models');

const userCategoryData = [
    {
        user_id: 1,
        category_id: 1
    },
    {
        user_id: 1,
        category_id: 2
    }
];

const seedCategories = () => UserCategory.bulkCreate(userCategoryData);

module.exports = seedCategories;