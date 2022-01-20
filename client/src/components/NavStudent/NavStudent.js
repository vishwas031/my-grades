import { Navbar, Container, Nav} from "react-bootstrap";

const NavStudent = ()=>{
  var Opts ='Login'
  const token = localStorage.getItem("token");
      if(token) 
        Opts = 'Logout';

    return (
        <Navbar collapseOnSelect expand="lg" style={{zIndex:1}} >
            <Container>
                <Navbar.Brand href="/" className="text-white" >MyGrades</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  </Nav>
                  <Nav >
                    { !token && <Nav.Link href="register" className="px-5 nav-opt">Register</Nav.Link>}
                    <Nav.Link href="login" className="px-5 nav-opt">{Opts}</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavStudent;