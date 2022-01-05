import {Form, Button} from "react-bootstrap";
import logo from '../assets/icons8-user-64.png'
import './Form.css'

const Form1 = ()=>{
    return (
        <>
        <div className="bg-img"></div>
        <div className="forms p-5 text-center">
            <div className="user">
              <img alt='robo' src={logo} className="user-logo"/>
              <h3 className="text-white">Student</h3>
            </div>
            <Form className="input-box">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="RollNo. (20XXBCS-0XX)" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="College Email ID" />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn">
                  Get Result
                </Button>
            </Form>
        </div>
        </>
    )
};

export default Form1;