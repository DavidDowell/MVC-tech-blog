const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'david1',
    password: 'password'
  },
  {
    username: 'mitch1',
    password: 'password123'
  },
  {
    username: 'teresa1',
    password: 'password123'
  },
  {
    username: 'alex1',
    password: 'password123'
  },
  {
    username: 'patrick1',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;