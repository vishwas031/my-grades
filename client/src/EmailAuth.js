const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// These id's and secrets should come from .env file.
const CLIENT_ID = '749615250124-ae30a6299ss714vpcq4nktme5qc16nik.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04EIoYKTOimXXCgYIARAAGAQSNwF-L9Ir5VfkY29VlfpgbkRsJOys_o7T9s5H9GwcCOaLzRDCjqTZXtKhWxBqTyJYwGW3S0CkstI';


const otpGenerator = require('otp-generator')

const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });


console.log(otp)


const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });


var email = '420farziman@gmail.com'

async function sendMail(email) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'mygrades001@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
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

module.exports = sendMail;

// sendMail(email)
//   .then((result) => console.log('Email sent...', result))
//   .catch((error) => console.log(error.message));
