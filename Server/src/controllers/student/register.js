const student = require('../../models/student')
const express = require("express")
const router = express.Router();

const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const otpGenerator = require('otp-generator');
const { route } = require('../../routes/admin');

const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });


//Function to send OTP to mail
async function sendMail(email) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'mygrades001@gmail.com',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'MyGrades <mygrades001@gmail.com>',
      to: email,
      subject: 'Hello from MyGrades',
      text: `Your OTP is ${otp}`,
      html: `<h1>Your OTP is ${otp}</h1>`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

exports.register= async (req,res)=>{
    const email= req.body.email

    //Check if the user already exist in the DB
    const user = await student.findOne({ "email": email })
    if (user) {
        return res.json({
            error:[
                {
                    msg: "User already exist, Login to get your Result"
                }
            ],
            data:null
            }
        ).end()
    }

    //Send OTP to user email and in the DB if user didn't exist in DB

    const newStudent = await student.create({
      "email_id": email,
      "otp": otp,
      "public_key": "temporary_key"
  })
    sendMail(email)
    .then(res.json({
      error:[
          {
              msg: null
          }
      ],
      data: "OTP sent to mail",
      email: email
      }
  ))
    .catch((error)=>console.log(error.message))
}

