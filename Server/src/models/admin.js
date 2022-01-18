const mongoose = require("mongoose") ;
const bcrypt = require('bcrypt')
const {Schema} = mongoose;

const adminSchema = new Schema({
    email:{
        type:String,
        trim: true,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
        min:5
    }
})


adminSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(9)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
      next()
    } catch (error) {
      next(error)
    }
  })
  
module.exports =  mongoose.model("admin",adminSchema) ;