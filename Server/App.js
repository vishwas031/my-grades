const cors = require('cors')
const express = require('express')
const mongoose = require("mongoose")

require("dotenv").config();

const admin = require("./src/routes/admin");
const student = require("./src/routes/student");

const app = express();


app.get('/',(req,res)=>
    res.send("HELLO"));

mongoose.connect(
    process.env.MONGO_URI    
).then(()=>{
    console.log("Connected to DB")
    app.use(cors())

    app.use("/admin", admin)
    app.use("/student",student)
    app.listen(process.env.PORT, ()=>{
        console.log(`listening to port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log(error)
    throw new Error(error)
})

