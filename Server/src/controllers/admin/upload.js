const upload = require('../../models/upload');
const arr = require('../../routes/output.json')
//error object to be sent for invalid credentials
// const error = {
//     status: 404,
//     message: "Invalid credentials"
// }

exports.upload = async (req, res) => {
    // console.log("in upload function")

    const result = {
        "subject1": ele.subject1,
        "subject2": ele.subject2,
        "subject3": ele.subject3
    }

    arr.forEach(ele => {
        const newAdmin = upload.create({
            "sem_no": ele.sem_no,
            "roll_no": ele.roll_no,
            "result": JSON.stringify(result)
            // "subject1": ele.subject1,
            // "subject2": ele.subject2,
            // "subject3": ele.subject3
        });
    });
    // console.log(req.body);
    console.log("successsssss");
    // Send the response
    return res.send({
        error: null,
        data: "uploaded successfully",
    }).end()
}
