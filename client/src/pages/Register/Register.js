import Student from '../../components/assets/Student.png'
import {Form, Button} from "react-bootstrap";
import axios from 'axios'
import { useState } from 'react';
import './Register.css'
import styled from 'styled-components';
import NavStudent from '../../components/NavStudent/NavStudent'
// import { useNavigate } from 'react-router-dom';
import MyResult from '../MyResult/MyResult'

const ErrorMessage = styled.p`
    color: red
`


const Register =({isSignUpFlow , text})=>{
    const token = localStorage.getItem("token");

    // const navigate = useNavigate()
    const [email, setEmail] = useState("")
    // const [name, setName] = useState("")
    const [errorMsg, setErrorMsg] = useState("")


    const handleClick = async ()=>{
        let data;
        if(isSignUpFlow){
            console.log("signing in")
            const {data: signUpData} = await axios.post("http://localhost:8080/auth/signup",{
                email
            })
            data = signUpData
            console.log(data)
        }else{
            console.log("logging in")
            const {data: loginData} = await axios.post("http://localhost:8080/auth/login",{
                email
            });
            data = loginData
            console.log(data)
        }

        if(data.error.length){
            setErrorMsg (data.error[0].msg);
        }
    }
    return (
        <>
            {!token && <> 
            <NavStudent/>
            <div className='main'>
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
                    <Button variant="primary" type="submit" className="btn" onClick={handleClick}>
                        Get OTP
                    </Button>
                </Form>
            </div>
            </>
          </div>
          {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </div>
        </>}
            {token && <MyResult/>}
        </>
    );
}

export default Register;