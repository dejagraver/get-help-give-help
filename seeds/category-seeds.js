const { Category } = require('../models');

const categoryData = [
    {
        name: 'Give Help'
    },
    {
        name: 'Get Help'
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories; 