const student = require('../../models/student')


exports.otpCheck = async(req,res)=>{
    //Now checking the OTP and updating the DB
  const enteredOTP = req.body.otp
  const email = req.body.email
  const user = await student.findOne({ "email": email })
  console.log("otp got from DB", user)
  if(enteredOTP === user.otp){
   await student.updateOne({email:email},{
     $set:{isVerified: 1}
   })
   return res.json({
     error:null,
     data: "You have been successfully registered"
   })
  }
  else{
   return res.json({
     error:[
       {
         msg: "OTP is incorrect! Try again"
       }
     ],
     data:null
   })
  }
  }