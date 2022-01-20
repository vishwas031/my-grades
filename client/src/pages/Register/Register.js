import Student from '../../components/assets/Student.png'
import {Form} from "react-bootstrap";
import axios from 'axios'
import { useState } from 'react';
import './Register.css'
import styled from 'styled-components';
import NavStudent from '../../components/NavStudent/NavStudent'

const ErrorMessage = styled.p`
    color: red
`
const BTN = styled.p`
    display:block;
    background-color: #359bc7
`


const Register =({isSignUpFlow , text})=>{
    // const navigate = useNavigate()
    const [email, setEmail] = useState("")
    // const [name, setName] = useState("")
    const [errorMsg, setErrorMsg] = useState("")


    const handleClick = async ()=>{
        let data;
        if(isSignUpFlow){
            console.log("signing in")
            const {data: signUpData} = await axios.post("http://localhost:8080/student/register",{
                email
            })
            data = signUpData
            console.log(data)
        }else{
            console.log("logging in")
            const {data: loginData} = await axios.post("http://localhost:8080/student/login",{
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
                    <BTN variant="primary" type="submit" className="btn" onClick={handleClick}>
                        Get OTP
                    </BTN>
                </Form>
            </div>
            </>
          </div>
          {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </div>
        </>
    );
}

export default Register;