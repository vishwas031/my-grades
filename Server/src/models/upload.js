const mongoose = require("mongoose") ;
const {Schema} = mongoose;

const resultSchema = new Schema({

    sem_no:{
        type:Number,
        required:true
    },
    roll_no:{
        // bcs_2020025@iiitm.ac.in
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
    // email:{
    //     type:String,
    //     trim: true,
    //     required:true,
    //     unique: true
    // },
    // password:{
    //     type:String,
    //     required:true,
    //     min:5
    // }
})



module.exports =  mongoose.model("upload",resultSchema) ;