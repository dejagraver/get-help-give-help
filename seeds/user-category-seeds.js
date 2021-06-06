const { UserCategory } = require('../models');

const userCategoryData = [
    {
        id: 1,
        category_id: 1
    },
    {
        id: 2,
        category_id: 2
    }
];

const seedCategories = () => UserCategory.bulkCreate(userCategoryData);

module.exports = seedCategories; 
