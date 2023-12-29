import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import logo from '../assets/truck.png'
import BootstrapNavbar from 'react-bootstrap/Navbar'; // Renamed the imported Navbar component

export default function CustomNavbar() {
    return (
        <BootstrapNavbar bg="dark" data-bs-theme="dark">
            <Container id='navbar'>
                <BootstrapNavbar.Brand as={Link} to="home"><img src={logo} alt="" width={50} /></BootstrapNavbar.Brand>
                <Nav className="me-auto">

                    <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/files/upload">Make a New Order</Nav.Link>
                    <Nav.Link as={Link} to="/admin">Admin daschboard</Nav.Link>
                </Nav>
            </Container>
        </BootstrapNavbar>
    );
}
