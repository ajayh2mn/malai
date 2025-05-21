import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/malai_logo.png"; // Ensure this path is correct for your project
import "../styles/Header.css";

const Header = () => {


  return (
    <Navbar expand="lg" className="header-navbar" fixed="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={Logo} alt="Logo" className="header-logo" />
        </Navbar.Brand>

        {/* Navbar Toggle for Mobile View */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto header-nav-links">
            <Nav.Link href="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="./Services" className="nav-link">
              Services
            </Nav.Link>
            <Nav.Link href="./Pricing" className="nav-link">
              Pricing
            </Nav.Link>
            <Nav.Link href="./Contact" className="nav-link">
              Contact Us
            </Nav.Link>
          </Nav>

          {/* Right Button */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
