const Mongoose = require('mongoose')

const userSchema  = Mongoose.Schema({
    email:{
        type:String,
        required:true
    },
  
},{timestamps:true})

const User = Mongoose.model("User",userSchema)
module.exports = User