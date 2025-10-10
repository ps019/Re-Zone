const express = require('express');
const UserModel = require('../database/UserSchema');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const {Email, Password} = req.body;
        const user = await UserModel.findOne({Email});
        if (user && await bcrypt.compare(Password, user.Password)) {
            console.log("Login Successful")
            res.status(200).json({message: "Login Successful"})
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
