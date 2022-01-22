import {Form} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import NavAdmin from "../../components/NavAdmin/NavAdmin";
import Admin from '../../components/assets/Admin.png'
import './AdminLogin.css'
import axios from 'axios'

const ErrorMessage = styled.p`
    color: red;
    font-weight: bold
`
const BTN = styled.p`
    display:block;
    background-color: #359bc7
`
const AdminLogin =()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("")

  const navigate = useNavigate()

  const handleClick = async ()=>{
    let data;
    const {data: AdminData} = await axios.post("http://localhost:8080/admin/AdminLogin",{
      email,
      password
    });
    data = AdminData;
    if(data.error.length){
      return setErrorMsg (data.error[0].msg);
  }
    localStorage.setItem("token",data.data.token)
    navigate("/admin/upload") 
  }
    return(
        <>
          <>
            <NavAdmin/>
            <div className='main'>
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
                {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
            </div>
            </>
          </div>
        </div>
        </>
        </>
    )
}

export default AdminLogin