'use client';

import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';

export default function TopMenu() {
    return (
        <Navbar expand="lg" bg="light" className="fixed-top">
            <Container>
                <Navbar.Brand href="#home">
                    <Image 
                        src="/img/wod-banyans-logo.png" 
                        alt="Banyans Logo" 
                        width={220}
                        className="logo-responsive"
                    />
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" style={{ textDecoration: 'underline' }}>Home</Nav.Link>
                        <Nav.Link href="#menu">Banyans Menu</Nav.Link>
                        <Nav.Link href="#reservations">Reservations</Nav.Link>
                        <Nav.Link href="#events">Events</Nav.Link>
                        <Nav.Link href="#gift-cards">Gift Cards</Nav.Link>
                    </Nav>
                    
                    <Nav>
                        <Nav.Link href="#instagram" className="social-icon">
                            <i className="fab fa-instagram"></i>
                        </Nav.Link>
                        <Nav.Link href="#facebook" className="social-icon">
                            <i className="fab fa-facebook"></i>
                        </Nav.Link>
                        <Nav.Link href="#twitter" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </Nav.Link>
                        <Nav.Link href="#tiktok" className="social-icon">
                            <i className="fab fa-tiktok"></i>
                        </Nav.Link>
                        
                        <NavDropdown title="English" id="language-dropdown">
                            <NavDropdown.Item href="#english">English</NavDropdown.Item>
                            <NavDropdown.Item href="#spanish">Español</NavDropdown.Item>
                            <NavDropdown.Item href="#french">Français</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}