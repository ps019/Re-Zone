const express = require('express');
const UserModel = require('../database/UserSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const {Email, Password} = req.body;
        const user = await UserModel.findOne({Email});
        if (user && await bcrypt.compare(Password, user.Password)) {
            const token = jwt.sign({ userId: user._id, email: user.Email }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '1h' });
            console.log("Login Successful")
            res.status(200).json({message: "Login Successful", token})
        } else {
            console.log("Invalid Credentials")
            res.status(401).json({message: "Invalid Credentials"})
        }
    } catch (err) {
        console.log("Error while login: ", err)
        res.status(500).json({message: "Internal Server Error"})
    }
})

module.exports = router;
