// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const client = require('../configs/db');

// //creating a sign up method 
// exports.signUp = (req, res) => {
//     const { username, name, email, password } = req.body;
//     console.log(req.body);
//     //checking if a user already exist with given email id
//     client.query(`SELECT * FROM users WHERE email = '${email}' OR username = '${username}'`, (err, data) => {
//         //if error occured
//         if (err) {
//             console.log(`Error occured in searching users\n ${err}`);
//             res.status(500).json({ message: 'Internal Server Error Please Try Again', });
//         }
//         //else move forward
//         else {
//             const userExists = data.rows.length;
//             if (userExists === 2) {
//                 if (data.rows[0].username === username || data.rows[1].username === username) {
//                     res.status(400).json({ message: 'Username already In Use' });
//                 }
//             }
//             if (userExists == 1) {
//                 if (data.rows[0].username === username) {
//                     res.status(400).json({ message: 'Username already In Use' });
//                 }
//             }
//             if (userExists !== 0) {
//                 res.status(400).json({ message: 'Email Already Registered, Try to Login', });
//             }
//             //If user not exist then add user in database 
//             else {
//                 //creating hash password
//                 bcrypt.hash(password, 10, (err, hash) => {
//                     if (err) {
//                         console.log(`Error occured in hashing password\n ${err}`);
//                         res.status(500).json({ message: 'Internal Server Error Please Try Again', });
//                     } else {
//                         //creating the user token
//                         const token = jwt.sign({
//                                 name: name,
//                                 email: email,
//                                 username: username,
//                             },
//                             process.env.SECRET_KEY, { expiresIn: '10m' }
//                         );
//                         //making a query at database to add the user.
//                         const profilePhotoUrl = 'https://firebasestorage.googleapis.com/v0/b/dubify-7f0f8.appspot.com/o/Profile-Photos%2F51f6fb256629fc755b8870c801092942.png?alt=media&token=f67200e6-85c6-49a8-afe1-9ebd06a298c5';
//                         client.query(`INSERT INTO users (username,originalusername, email, name, isVerified, isLoggedin, password, profilePhoto, likes, comments, share, followercount, postmade, followingcount, about) VALUES  ('${username}','${username}', '${email}', '${name}', 0, 0, '${hash}', '${profilePhotoUrl}', 0, 0, 0, 0, 0, 0, ''); `, (err) => {
//                             if (err) {
//                                 console.log(`Error occured in adding user\n ${err.message}`);
//                                 res.status(500).json({ message: 'Internal Server Error Please Try Again', });
//                             } else {
//                                 console.log('User added successfully');
//                                 res.status(200).json({
//                                     message: `Accounting Creation Pending, Verify Email to Complete Account Creation Process.`,
//                                     userToken: token,
//                                     domain: process.env.DOMAIN,
//                                     key: process.env.KEY,
//                                 });
//                             }
//                         });
//                     }
//                 });
//             }
//         }
//     });
// };



// //verifcation of email sent to user
// exports.verifyEmail = (req, res) => {
//     const token = req.headers.authorization;
//     jwt.verify(token, process.env.SECRET_KEY, (err, result) => {
//         if (err) {
//             console.log('error here');
//             console.log(err);
//             res.status(500).json({
//                 message: "Token Expired",
//             })
//         } else {
//             if (result) {
//                 const username = result.username;
//                 const email = result.email;
//                 const name = result.name;
//                 client.query(`SELECT id, name ,username ,email FROM users WHERE email = '${email}';`, (err, data) => {
//                     if (err) {
//                         console.log(err);
//                         res.status(500).json({
//                             message: "Internal server Error",
//                         })
//                     } else {
//                         if (data.rows.length === 0 || data.rows[0].name !== name || data.rows[0].username !== username) {
//                             console.log("Inavalid Token");
//                             res.status(400).json({
//                                 message: "Invalid Token",
//                             })
//                         } else {
//                             client.query(`UPDATE users SET isVerified = 1 WHERE email = '${email}';`, (err) => {
//                                 if (err) {
//                                     res.status(500).json({ message: 'Internal Server Error Please Try Again', });
//                                 } else {
//                                     res.status(200).json({ message: 'Email Verified Succesfully, Would Be Directed To Login Page Shortly.' })
//                                 }
//                             })
//                         }
//                     }
//                 })
//             } else {
//                 res.status(400).json({ message: "Token Expired" })
//             }
//         }
//     })
// }