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
    result:{
        type:String
    }
})



module.exports =  mongoose.model("upload",resultSchema) ;