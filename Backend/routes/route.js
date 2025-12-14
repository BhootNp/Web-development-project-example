const express = require('express').Router();

const {getAllUsers}= require('../controllers/userController');

express.get('/users', getAllUsers);

module.exports = express;