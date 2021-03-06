import {Form} from "react-bootstrap";
import NavAdmin from "../../components/NavAdmin/NavAdmin";
import Admin from '../../components/assets/Admin.png'
import './Upload.css'
import styled from 'styled-components';
const BTN = styled.p`
    display:block;
    background-color: #359bc7
`

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
                        <Form.Control type="file" id="upload" name="" className="text-secondary"/>
                    </Form.Group>
                    <BTN variant="primary" type="submit" className="btn" action='/admin/upload'>
                        Upload
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

export default Upload