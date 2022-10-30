const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'mitch1',
    email: 'mitch1@gmail',
    password: 'password123'
  },
  {
    username: 'teresa1',
    email: 'teresa1@gmail',
    password: 'password123'
  },
  {
    username: 'alex1',
    email: 'alex1@gmail',
    password: 'password123'
  },
  {
    username: 'patrick1',
    email: 'patrick1@gmail',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;