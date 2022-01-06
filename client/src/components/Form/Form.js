import {Form, Button} from "react-bootstrap";
import Student from '../assets/Student.png'
import Admin from '../assets/Admin.png'
import './Form.css'

const Form1 = ({array})=>{
    return (
        <>
        <div className="bg-img"></div>
        <div className="forms p-5 text-center">
            <div className="user">
              <h1 className="text-white mb-3">{array[1]}</h1>
              <img alt='robo' src={Student} className="user-logo"/>
              <h3 className="text-white">{array[0]}</h3>
            </div>
            <Form className="input-box">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type='text' placeholder={array[2]} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type='text' placeholder={array[3]} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type={array[5]} placeholder={array[4]} className="text-secondary"/>
                </Form.Group>
                <Button variant="primary" type="submit" className="btn">
                  {array[6]}
                </Button>
            </Form>
        </div>
        </>
    )
};

export default Form1;