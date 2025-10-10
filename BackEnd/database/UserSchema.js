
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    UserName: {
        type: String,
        unique: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel;