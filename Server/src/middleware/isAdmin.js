require("dotenv").config();

const jwt = require('jsonwebtoken');
const admin = require('../models/admin.js');

//verify the token
const isValid = async(req, res, next)=>{
    if(!req.headers.token){
        return res.send({
            status: 404,
            message: "Login as Admin first"
        })
    }
    const verifyToken = jwt.verify(req.headers.token, process.env.JWT_KEY)

    //If token is not valid
    if(!verifyToken){
        return res.send({
            status: 404,
            message: "Invalid user"
        }).end()
    }

    // If token is valid, search the user in database
    const adminValid = await admin.findOne({email: verifyToken.email})

    // If admin is not found
    if(!adminValid){
        return res.send({
            status: 404,
            message: "Admin not found"
        })
    }
    console.log(verifyToken)
    //move to next function
    next()
}


module.exports = isValid

    

