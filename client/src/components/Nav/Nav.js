import { Navbar, Container, Nav} from "react-bootstrap";
import './Nav.css'
// import {Link} from 'react-router-dom'

const Nav1 = ()=>{
    return (
        <Navbar collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home" className="text-white" >MyGrades</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  </Nav>
                  <Nav >
                    <Nav.Link href="#register" className="px-5 nav-opt">Register</Nav.Link>
                    <Nav.Link href="#login" className="px-5 nav-opt">Login</Nav.Link>
                    <Nav.Link href="#myResult" className="px-5 nav-opt">My Result</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Nav1;