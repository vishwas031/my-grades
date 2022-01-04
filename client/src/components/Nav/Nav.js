import { Navbar, Container, Nav} from "react-bootstrap";
import './Nav.css'
// import {Link} from 'react-router-dom'

const Nav1 = ()=>{
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" >
            <Container>
                <Navbar.Brand href="#home" >MyGrades</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  </Nav>
                  <Nav className="nav-opt">
                    <Nav.Link href="#register" className="px-5 text-dark ">Register</Nav.Link>
                    <Nav.Link href="#login" className="px-5 text-dark">Login</Nav.Link>
                    <Nav.Link href="#myResult" className="px-5 text-dark">My Result</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Nav1;