const express = require('express').Router();

const {addUser, getActiveUsers, getAllUsers}= require('../controllers/userController');

express.post('/register', addUser);
express.get('/all', getAllUsers);
express.get('/getactiveusers', getActiveUsers);

module.exports = express;