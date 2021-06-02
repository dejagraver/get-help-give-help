const User = require('./User');
const Post = require('./Post');
const Category = require('./Category');
const Comment = require('./Comment');
const UserCategory = require('./UserCategory');

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

User.belongsToMany(Category, { through: UserCategory });
Category.belongsToMany(User, { through: UserCategory });

Category.hasMany(Post);
Post.belongsTo(Category);

module.exports = { User, Post, Category, Comment, UserCategory }