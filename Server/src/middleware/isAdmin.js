require("dotenv").config();


const jwt = require('jsonwebtoken');
const admin = require('../models/admin.js');

const {SECRET_KEY} = process.env.SECRET_KEY;

//verify the token
const isValid = async(req, res, next)=>{
    const verifyToken = jwt.verify(req.headers.token, SECRET_KEY)

    //If token is not valid
    if(!verifyToken){
        return res.send({
            status: 404,
            message: "Invalid token"
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

    //move to next function
    next()
}


module.exports = isValid

    

