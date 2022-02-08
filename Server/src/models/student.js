const mongoose = require("mongoose") ;
const {Schema} = mongoose;

const studentSchema = new Schema({

    email_id:{
        type:String,
        required:true,
        unique: true
    },
    otp:{
        type:String,
        default:0
    },
    public_key:{
        type:String
    },
    isVerified:{
        type:Number,
        default:0
    }
})



module.exports =  mongoose.model("student",studentSchema) ;