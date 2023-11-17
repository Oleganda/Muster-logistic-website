import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/truck.png'
import BootstrapNavbar from 'react-bootstrap/Navbar'; // Renamed the imported Navbar component

export default function CustomNavbar() {
    return (
        <BootstrapNavbar bg="dark" data-bs-theme="dark">
            <Container>
                <BootstrapNavbar.Brand href="#home"><img src={logo} alt="" width={50} /></BootstrapNavbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/#aboutUs">About Us</Nav.Link>
                    <Nav.Link href="/#ourServices">Our Services</Nav.Link>
                    <Nav.Link href="/#user-input">Calculator</Nav.Link>
                </Nav>
            </Container>
        </BootstrapNavbar>
    );
}
