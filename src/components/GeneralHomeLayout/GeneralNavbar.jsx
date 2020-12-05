import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

function GeneralNavbar() {
    return (

        <Navbar fixed = "top" expand = "sm" variant = "dark" style = {{backgroundColor: "#212735"}}>

            <Navbar.Brand className = "text-light" href = "/">uFirst</Navbar.Brand>
            <Navbar.Toggle aria-controls = "responsive-navbar-nav"/>
            <Navbar.Collapse id = "responsive-navbar-nav">

                <Nav className = "ml-auto">

                    <Nav.Link as = {Link} to = "/About" className = "mt-2">About</Nav.Link>
                    <Nav.Link as = {Link} to = "/WhyuFirst?" className = "mt-2">Why uFirst?</Nav.Link>
                    <Nav.Link as = {Link} to = "/FAQ" className = "mt-2">FAQ</Nav.Link>
                    <Nav.Link as = {Link} to = "/Contact" className = "mt-2">Contact</Nav.Link>

                    <Nav.Link as = {Link} to = "/Login">

                        <Button variant = "info">Login</Button>

                    </Nav.Link>

                    <Nav.Link as = {Link} to = "/SignUp">

                        <Button variant = "success">Get Started</Button>
                    
                    </Nav.Link>

                </Nav>

                </Navbar.Collapse>

                </Navbar>
        
    )
}

export default GeneralNavbar;
