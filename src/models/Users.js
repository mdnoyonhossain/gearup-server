const { Schema, model } = require("mongoose");


const userSchema = new Schema({
    name: String,
    email: String,
    image: String,
    role: {
        type: String,
        default: "user"
    }
},{versionKey: false})

const User = model("User", userSchema);
module.exports = User;