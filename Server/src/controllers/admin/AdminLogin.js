const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const admin = require('../../models/admin')

//error object to be sent for invalid credentials
// const error = {
//     status: 404,
//     message: "Invalid credentials"
// }

exports.AdminLogin = async(req, res) => {
    //Extract the email and password
    const {email, password} = req.body

    //Fetch admin from db and check if admin exists
    const user = await admin.findOne({ "email": email })
    if (!user) {
        return res.status(404).send("User not Found").end()
    }

    //compare the password in request body and the password in db
    const passwordMatches = await bcrypt.compare(password, user.password)

    //Send the response if password is incorrect
    if (!passwordMatches) {
        return res.status(404).send("Invalid Password").end()
    }

    //Generate JWT token
    const token = jwt.sign({ "email": email }, process.env.JWT_KEY)

    // Send the response 
    return res.send({
        status: 200,
        message: "Logged in successfully",
        token: token
    }).end()

}