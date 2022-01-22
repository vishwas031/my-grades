require("dotenv").config();


const jwt = require('jsonwebtoken');
const student = require('../models/student.js');

//verify the token
const isLoggedIn = async(req, res, next)=>{
    const verifyToken = jwt.verify(req.headers.token, process.env.SECRET_KEY)

    //If token is not valid
    if(!verifyToken){
        return res.send({
            status: 404,
            message: "Invalid token"
        }).end()
    }

    // If token is valid, search the user in database
    const studentValid = await student.findOne({email: verifyToken.email})

    // If admin is not found
    if(!studentValid){
        return res.send({
            status: 404,
            message: "Student not registered"
        })
    }

    //move to next function
    next()
}


module.exports = isLoggedIn

    

