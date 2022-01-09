import {Form, Button} from "react-bootstrap";
import NavAdmin from "../../components/NavAdmin/NavAdmin";
import Admin from '../../components/assets/Admin.png'
import './AdminLogin.css'

const AdminLogin =()=>{
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
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="text" placeholder="Email ID" className="text-secondary"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" className="text-secondary"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn" >
                        Login
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

export default AdminLogin