import {Form, Button} from "react-bootstrap";
import './Form.css'

const Form1 = ()=>{
    return (
        <div className="forms p-5 text-center">
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
    )
};

export default Form1;