const express = require("express")
const router = express.Router();
const {register} = require ('../controllers/student/register.js')
const {login} = require ('../controllers/student/login.js')
const {myResult} = require ('../controllers/student/myResult.js')
const isLoggedIn = require("../middleware/isLoggedIn")


// router.post('/register',register);
// router.post('/login',login);
// router.post('/myResult',isLoggedIn,myResult);

module.exports = router ;