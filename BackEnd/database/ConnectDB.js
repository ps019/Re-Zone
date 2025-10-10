const mongoose = require('mongoose');

function ConnectDB() {
    mongoose.connect('mongodb+srv://ps019:1gqIpxFu7QmhyYAe@re-zone.gtonwzt.mongodb.net/Re-Zone?retryWrites=true&w=majority&appName=Re-Zone')
    .then(() => {
        console.log("Connected to the database")
    } )
    .catch((err) => {
        console.log(err)
    })
}
module.exports = ConnectDB;