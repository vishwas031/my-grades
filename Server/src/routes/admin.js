const express = require("express")
const router = express.Router();
// const admin = require('../models/admin')
const {upload} = require ('../controllers/admin/upload.js')
const {AdminLogin} = require ('../controllers/admin/AdminLogin.js')
const isAdmin = require("../middleware/isAdmin");
const csvtojson = require('csvtojson');
const fs = require('fs');
const path = require('path');


const multer  = require('multer')
const storage = multer.diskStorage({
   destination:(req,file,cb)=>{
      cb(null,"./src/routes/csv_file");
   },
   filename: (req,file,cb)=>{
      console.log(file);
      var fileName =  Date.now()+path.extname(file.originalname)
      cb(null,Date.now()+path.extname(file.originalname));

      console.log(fileName)
    const csvfilepath="./src/routes/csv_file/" + fileName;
    csvtojson()
    .fromFile(csvfilepath)
    .then((json)=>
    {
        console.log(json);
        fs.writeFileSync("./src/routes/output.json",JSON.stringify(json),"utf-8",(err)=>
        {
           if(err){console.log(err);} 
        });
    })
   },
})

const uploadMiddleware = multer({ storage:storage })



router.use(express.json())

router.post('/AdminLogin',AdminLogin)

router.post('/upload',uploadMiddleware.single('csv'),upload)

module.exports = router ;