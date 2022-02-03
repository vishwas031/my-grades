const express = require("express")
const router = express.Router();
const {register} = require ('../controllers/student/register.js')
const {login} = require ('../controllers/student/login.js')
const {myResult} = require ('../controllers/student/myResult.js')
const isLoggedIn = require("../middleware/isLoggedIn")
const {otpCheck} = require('../controllers/student/otpCheck')


router.post('/register',register);


// OTP check route
router.post('/otpCheck',otpCheck);


// router.post('/login',login);
// router.post('/myResult',isLoggedIn,myResult);

module.exports = router ;