const mongoose = require("mongoose");

const connectDB = () => {
    try {
        return mongoose.connect("mongodb+srv://dnyaneshm:magar123@cluster0.jc4sy.mongodb.net/dashboard?retryWrites=true&w=majority");
    } catch (err) {
        console.log(err)
    }
}
module.exports = connectDB;