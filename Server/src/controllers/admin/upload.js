const upload = require('../../models/upload');
//error object to be sent for invalid credentials
// const error = {
//     status: 404,
//     message: "Invalid credentials"
// }

exports.upload = async(req, res) => {
    //Extract the email and password
    const {sem_no,roll_no,subject1,subject2,subject3} = req.body;
    console.log(req.body);
    //Fetch admin from db and check if admin exists
    
    const newAdmin = await upload.create({
        "sem_no":1,
        "roll_no":"BCS2020025",
        "subject1":100,
        "subject2":100,
        "subject3":100
    });
    console.log("successsssss");
    // Send the response 
    return res.send({
        status: 200,
        message: "uploaded successfully",
    }).end()
}

// bcs_2020025@iiitm.ac.in