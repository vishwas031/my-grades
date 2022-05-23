import { Navbar, Container, Nav} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const NavStudent = ()=>{

  const navigate = useNavigate()
  const token = localStorage.getItem("token");

  const logout = ()=>{
    if(token){
      localStorage.removeItem("token")
      navigate("/admin/AdminLogin")
    }
  }
    return (
        <Navbar collapseOnSelect expand="lg" style={{zIndex:1}} >
            <Container>
                <Navbar.Brand href="/" className="text-white" onClick={logout}>MyGrades</Navbar.Brand>
                {token && <><Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  </Nav>
                  <Nav >
                    <Nav.Link href="AdminLogin" className="px-5 nav-opt" onClick={logout}>Logout</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
                </>}
            </Container>
        </Navbar>
    )
};

export default NavStudent;