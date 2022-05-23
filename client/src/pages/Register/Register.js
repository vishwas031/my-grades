import Student from '../../components/assets/Student.png'
import {Form} from "react-bootstrap";

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'
import { useState } from 'react';
import './Register.css'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NavStudent from '../../components/NavStudent/NavStudent'
const NodeRSA = require("node-rsa");
var uniqueFilename = require('unique-filename')

const BTN = styled.p`
    display:block;
    background-color: #359bc7
`

const download = (filename, text) => {
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);
      console.log(element)
    element.click();

    document.body.removeChild(element);
  };

  const generateKeyPair = () => {
    const key = new NodeRSA({ b: 512 });
    const publicKey = key.exportKey("public");
    const privateKey = key.exportKey("private");

    return { publicKey, privateKey };
  };


const Register =({text})=>{
  var randomPrefixedTmpfile = uniqueFilename('/tmp', 'private-key')
  const [email, setEmail] = useState("");
  const [otp,SetOTP] = useState('')
  const [pvtKey,SetPvtKey] = useState('')

  const navigate = useNavigate()

  const handleClick = async ()=>{
    let data;
    if(text==='Login'){
    var {data: userData} = await axios.post("http://localhost:8080/student/login",{
      email
    });
  }
  else{
    const { publicKey, privateKey } = generateKeyPair();
    SetPvtKey(privateKey);
    var {data: userData} = await axios.post("http://localhost:8080/student/register",{
      email,
      publicKey
    });
  }
    data = userData;
    if(data.error.length){
      toast.error(data.error[0].msg)
      return 0;
  }
  }

  const handleOTPcheck = async ()=>{
    let data
    if(text==="Login"){
      var {data: userData} = await axios.post("http://localhost:8080/student/login/otpCheck",{
      email,
      otp
    });
    data = userData;
    if(data.error != null){
      toast.error(data.error[0].msg)
      return 0;
  }
  localStorage.setItem("token",data.data.token)
  toast.info("Redirecting to Result page")
  setTimeout(() => {
    navigate("/student/myResult")
  }, 6000)
  }
  else{
    var {data: userData} = await axios.post("http://localhost:8080/student/register/otpCheck",{
    email,
    otp
  });
    data = userData;
    if(data.error != null){
      toast.error(data.error[0].msg)
      return 0;
  }
  download(`${randomPrefixedTmpfile}`,`${pvtKey}`)
  toast.info("Your Private Key is downloaded on your PC")
  toast.info("Redirecting to Login page")
  setTimeout(() => {
    navigate("/student/login")
  }, 6000)
}
}
    return (
        <>
            <NavStudent/>
            <div className='main'>
            <ToastContainer
                          position="top-right"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          />
          <div className='left-side'>
            <>
            <div id="bg-img-reg"></div>
            <div className="forms p-5 text-center">
                <div className="user">
                    <h1 className="text-white mb-3">{text}</h1>
                    <img alt='robo' src={Student} className="user-logo"/>
                    <h3 className="text-white">Student</h3>
                 </div>
                <Form className="input-box">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="text" placeholder="College Email ID" className="text-secondary" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </Form.Group>
                    <BTN variant="primary" type="submit" className="btn" onClick={handleClick}>
                        Get OTP
                    </BTN>
                </Form>
                <Form className="input-box">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="text" placeholder="Enter OTP" className="text-secondary" value={otp} onChange={(e)=>{SetOTP(e.target.value)}}/>
                    </Form.Group>
                    <BTN variant="primary" type="submit" className="btn" onClick={handleOTPcheck}>
                        Check OTP
                    </BTN>
                </Form>
            </div>
            </>
          </div>
        </div>
        </>
    );
}

export default Register;