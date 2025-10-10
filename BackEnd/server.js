const express = require('express');
const cors = require('cors');
const ConnectDB = require('./database/ConnectDB');
const signUpRouter = require('./Authentication/signup');
const loginRouter = require('./Authentication/login');

const app = express();
ConnectDB();
app.use(cors());
app.use(express.json());
app.use('/', signUpRouter);
app.use('/', loginRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`The server is running on: http://localhost:${PORT}`);
});
