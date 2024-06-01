const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName:{type:String, required: true},
    lastName:{type:String, required: true},
    password:{type:String, required: true},
    email:{type:String, unique: true}
})

let userModel = mongoose.model("User", userSchema)

module.exports = userModel