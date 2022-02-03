const mongoose = require("mongoose") ;
const {Schema} = mongoose;

const resultSchema = new Schema({

    sem_no:{
        type:Number,
        required:true
    },
    roll_no:{
        type:String,
        required:true
    },
    subject1:{
        type:Number,
        default:0
    },
    subject2:{
        type:Number,
        default:0
    },
    subject3:{
        type:Number,
        default:0
    }
})



module.exports =  mongoose.model("upload",resultSchema) ;