import {Form} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useState } from 'react';
import styled from 'styled-components';
import NavAdmin from "../../components/NavAdmin/NavAdmin";
import Admin from '../../components/assets/Admin.png'
import './AdminLogin.css'
import axios from 'axios'
const BTN = styled.p`
    display:block;
    background-color: #359bc7
`

const AdminLogin =()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleClick = async ()=>{
    let data;
    const {data: AdminData} = await axios.post("http://localhost:8080/admin/AdminLogin",{
      email,
      password
    });
    data = AdminData;
    if(data.error.length){
      toast.error(data.error[0].msg)
      return 0;
  }
    localStorage.setItem("token",data.data.token)
    toast.info("Signing you in...")
  setTimeout(() => {
    navigate("/admin/upload")
  }, 6000) 
  }
    return(
        <>
          <>
            <NavAdmin/>
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
            <div id="bg-img-admin"></div>
            <div className="forms p-5 text-center">
                <div className="user">
                    <h1 className="text-white mb-3">Login</h1>
                    <img alt='robo' src={Admin} className="user-logo"/>
                    <h3 className="text-white">Admin</h3>
                 </div>
                <Form className="input-box">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Email ID" className="text-secondary" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password"  placeholder="Password" className="text-secondary" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    </Form.Group>
                    <BTN variant="primary" type="submit" onClick={handleClick} className="btn" >
                        Login
                    </BTN>
                </Form>
            </div>
            </>
          </div>
        </div>
        </>
        </>
    )
}

export default AdminLogin