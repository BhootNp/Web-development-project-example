const express = require('express').Router();

const {addUser,getActiveUsers,getAllUsers,getUserById, updateUser, deleteUser} = require('../controllers/userController');

express.post('/register', addUser);
express.get('/all', getAllUsers);
express.get('/getactiveusers', getActiveUsers);
express.get('/id/:id', getUserById);
express.put('/update/:id',updateUser); 
express.delete('/delete/:id',deleteUser);

module.exports = express;
