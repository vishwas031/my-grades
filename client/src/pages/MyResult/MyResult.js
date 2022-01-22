import {Form} from "react-bootstrap";
import Nav1 from "../../components/NavStudent/NavStudent"
import Student from '../../components/assets/Student.png'
import './MyResult.css'
import styled from 'styled-components';
const BTN = styled.p`
    display:block;
    background-color: #359bc7
`

const MyResult =()=>{
    return(
        <>
            <Nav1/>
            {/* <Body text='Student,My Result,Semester no.,private KEY,file, Get Result'/> */}
            <div className='main'>
          <div className='left-side'>
          <>
        <div id="bg-img-res"></div>
        <div className="forms p-5 text-center">
            <div className="user">
              <h1 className="text-white mb-3">My Result</h1>
              <img alt='robo' src={Student} className="user-logo"/>
              <h3 className="text-white">Student</h3>
            </div>
            <Form className="input-box">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type='text' placeholder='College Email ID' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type='integer' placeholder='Semester No.' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <label for="upload" className="text-white">Attach Private key here</label>
                  <Form.Control type='file' placeholder='Private Key' id="upload" className="text-secondary"/>
                </Form.Group>
                <BTN variant="primary" type="submit" className="btn">
                  Get Result
                </BTN>
            </Form>
        </div>
        </>
          </div>
        </div>
        </>
    )
}

export default MyResult