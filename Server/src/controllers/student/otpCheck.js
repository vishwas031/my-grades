const student = require('../../models/student')


exports.otpCheck = async(req,res)=>{
    //Now checking the OTP
  const enteredOTP = req.body.otp
  const email = req.body.email
  const user = await student.find({ "email_id": email })
  console.log(user)
  console.log("otp got from DB", user[0].otp)
  if(enteredOTP === user[0].otp){
   await student.updateOne({"email_id":email},{
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