import React from "react";
import { Container, Nav, Navbar as BootstrapNav } from "react-bootstrap"

export function Navbar(){
    return(
        <BootstrapNav bg="light" data-bs-theme="light" className="shadow-sm sticky-top">
            <Container>
                <BootstrapNav.Brand href="/">ClassMeet</BootstrapNav.Brand>
                <BootstrapNav.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNav.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#group">Group</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </BootstrapNav.Collapse>
            </Container>
        </BootstrapNav>
    )
}