const express = require("express")
const router = express.Router();
const admin = require('../models/admin')
const {upload} = require ('../controllers/admin/upload.js')
const {AdminLogin} = require ('../controllers/admin/AdminLogin.js')
const isAdmin = require("../middleware/isAdmin");

router.use(express.json())

router.post('/AdminLogin',AdminLogin)

router.post('/upload',isAdmin,(req,res)=>{
    upload
});

module.exports = router ;