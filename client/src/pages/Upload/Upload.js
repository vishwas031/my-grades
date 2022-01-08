import {Form, Button} from "react-bootstrap";
import NavAdmin from "../../components/NavAdmin/NavAdmin";
import Admin from '../../components/assets/Admin.png'
import './Upload.css'

const Upload =()=>{
    return(
        <>
            <>
            <NavAdmin/>
            <div className='main'>
          <div className='left-side'>
            <>
            <div id="bg-img-upload"></div>
            <div className="forms p-5 text-center">
                <div className="user">
                    <h1 className="text-white mb-3">Upload Result</h1>
                    <img alt='robo' src={Admin} className="user-logo"/>
                    <h3 className="text-white">Admin</h3>
                 </div>
                <Form className="input-box">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="integer" placeholder="Batch" className="text-secondary"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="integer" placeholder="Semester No." className="text-secondary"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <label for="upload" className="text-white">Upload the CSV file</label>
                        <Form.Control type="file" id="upload" className="text-secondary"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn" >
                        Upload
                    </Button>
                </Form>
                </div>
                </>
            </div>
            </div>
            </>
        </>
    )
}

export default Upload