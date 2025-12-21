const User = require('../models/userModel');

const addUser = async (req, res) => {
    try {
        const { username, email, password} = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ 
                message: "All fields are required" 
            });
        }
        const newUser = await User.create({ 
            username, 
            email, 
            password
         });
        
        res.status(201).json({
            message: "User added successfully",
            user: newUser
        });
    } catch (error) {
        res.status(500).json({ 
            message: "Error adding user", 
            error: error.message 
        });
    }
};

const getAllUsers = async (req, res) => {
   const users =  User.findAll({});
   res.json(users, message="All users retrieved successfully");
};

const getActiveUsers = async (req, res) => {
    res.json({ message: "Get active users - to be implemented" });
};

module.exports = { addUser, getAllUsers , getActiveUsers };