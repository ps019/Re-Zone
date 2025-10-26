require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ConnectDB = require('./database/ConnectDB');
const signUpRouter = require('./Authentication/signup');
const loginRouter = require('./Authentication/login');
const authenticateToken = require('./Authentication/authMiddleware');

const app = express();
ConnectDB();
app.use(cors());
app.use(express.json());
app.use('/', signUpRouter);
app.use('/', loginRouter);

// Example protected route (can be used later)
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`The server is running on: http://localhost:${PORT}`);
});
