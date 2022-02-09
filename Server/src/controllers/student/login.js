const student = require('../../models/student')
const express = require("express")
// const router = express.Router();
const fs = require('fs')

const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const otpGenerator = require('otp-generator');

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
      text: `Your Login OTP is ${otp}`,
      html: `<h1>Your Login OTP is ${otp}</h1>`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}


exports.login = async (req, res) => {
  const { email } = req.body
  console.log(email)
  //Check if the user already exist in the DB
  const user = await student.find({ "email_id": email })

// console.log(user)
  //if user exist and is verified

    if(user.length){
      if(user[0].isVerified){
      await student.updateOne({
        "email_id": email},{
        "otp": otp
      })
      sendMail(email)
        .then(res.json({
          error: [
            {
              msg: null
            }
          ],
          data: "OTP sent to mail",
          email: email
        }
        ))
        .catch((error) => console.log(error.message)).end()
      }
    }

    // if user doesn't exist or user exist but not verified
    return res.json({
        error: [
          {
            msg: "User didn't exist, First Register yourself"
          }
        ],
        data: null
      }
      )
}

