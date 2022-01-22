const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const admin = require('../../models/admin')

exports.AdminLogin = async(req, res) => {
    //Extract the email and password
    const {email, password} = req.body

    //Fetch admin from db and check if admin exists
    const user = await admin.findOne({ "email": email })
    if (!user) {
        return res.json({
            error:[
                {
                    msg: "User not Found"
                }
            ],
            data:null
            }
        ).end()
    }

    //compare the password in request body and the password in db
    const passwordMatches = await bcrypt.compare(password, user.password)

    //Send the response if password is incorrect
    if (!passwordMatches) {
        return res.json({
            error:[
                {
                    msg: "Invalid Password"
                }
            ],
            data:null
            }
        ).end()
    }

    //Generate JWT token
    const token = jwt.sign({ "email": email }, process.env.JWT_KEY)

    // Send the response 
    return res.json({
        error: [],
        data: {
            token
        }
    }).end()
}