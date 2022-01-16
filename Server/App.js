const cors = require('cors')


require("dotenv").config();
const express = require('express')



// const admin = require("./src/routes/admin");
// const student = require("./src/routes/student");


const app = express();


app.get('/',(req,res)=>
    res.send("HEyyy"));

// app.use("/admin",admin)
// app.use("/student",student)



app.listen(process.env.PORT, ()=>{
    console.log(`listening to port ${process.env.PORT}`)
})