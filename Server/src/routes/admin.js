const express = require("express")
const router = express.Router();
const {upload} = require ('../controllers/admin/upload.js')
const {AdminLogin} = require ('../controllers/admin/AdminLogin.js')
const authMiddleware = require("../middleware/authMiddleware")


router.post('/AdminLogin',AdminLogin);
router.post('/upload',authMiddleware,upload);

module.exports = router