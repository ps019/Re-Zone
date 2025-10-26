const express = require('express');
const UserModel = require('../database/UserSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/SignUp', async (req, res) => {
  try {
    let { UserName, Email, Password } = req.body;
    UserName = UserName.trim();
    Email = Email.trim();
    Password = Password.trim();

    if (!UserName || !Email || !Password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await UserModel.findOne({ $or: [{ Email }, { UserName }] });
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email or username already exists' });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);
    const user = await UserModel.create({ UserName, Email, Password: hashedPassword });
    const token = jwt.sign({ userId: user._id, email: user.Email }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '1h' });
    res.status(200).json({ message: 'SignUp Successful', token });
    console.log('SignUp Successful');
  } catch (err) {
    console.log('Error while SignUp: ', err);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation Error', details: err.message });
    }
    if (err.code === 11000) {
      return res.status(409).json({ message: 'Duplicate key error' });
    }
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
