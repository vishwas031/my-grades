import { Navbar, Container,Nav} from "react-bootstrap";
import './Nav.css'
// import {Link} from 'react-router-dom'

const Nav1 = ()=>{
    return (
        <Navbar collapseOnSelect expand="lg" style={{zIndex:1}} >
            <Container>
                <Navbar.Brand href="/" className="text-white" >MyGrades</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Nav1;