import { Navbar, Container, Nav} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const NavStudent = ()=>{
  var Opts ='Login'
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
      if(token) 
        Opts = 'Logout';
      
    const logout = ()=>{
    if(token){
      localStorage.removeItem("token")
      navigate("/student/login")
    }}

    return (
        <Navbar collapseOnSelect expand="lg" style={{zIndex:1}} >
            <Container>
                <Navbar.Brand href="/" className="text-white" onClick={logout}>MyGrades</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  </Nav>
                  <Nav >
                    { !token && <Nav.Link href="register" className="px-5 nav-opt">Register</Nav.Link>}
                    <Nav.Link href="login" className="px-5 nav-opt" onClick={logout}>{Opts}</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavStudent;