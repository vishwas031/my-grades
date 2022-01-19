const express = require("express")
const router = express.Router();
const {register} = require ('../controllers/student/register.js')
const {login} = require ('../controllers/student/login.js')
const {myResult} = require ('../controllers/student/myResult.js')
const isLoggedIn = require("../middleware/isLoggedIn")


router.post('/register',(req,res)=>{
    register
} );
router.post('/login',(req,res)=>{
    login
});
router.post('/myResult',isLoggedIn,(req,res)=>{
    myResult
});

module.exports = router ;