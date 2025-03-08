import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-container">
          <Col md={4} sm={12} className="footer-left">
            {/* <div className="logo">LOGO</div> */}
            <div className="contact-information">
              <p>
                <i className="fas fa-envelope"></i> malaagencybore@gmail.com
              </p>
              <p>
                <i className="fas fa-phone"></i> 8489496930, 9585842316
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> Pondeychery Borewell
              </p>
            </div>
          </Col>
          <Col md={6} sm={12} className="footer-right">
            <p className="footer-description">
              Expert borewell services ensuring accurate drilling, timely
              completion, and lasting water solutions for every requirement.
            </p>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <Row className="footer-services">
          <Col sm={12}>
            <h4>Main Service’s</h4>
          </Col>
          <Col xs={6} sm={4} md={2} className="service-item">
            Drilling Type
          </Col>
          <Col xs={6} sm={4} md={2} className="service-item">
            Pebbles Type
          </Col>
          <Col xs={6} sm={4} md={2} className="service-item">
            Motor Type
          </Col>
          <Col xs={6} sm={4} md={2} className="service-item">
            Available
          </Col>
          <Col xs={6} sm={4} md={2} className="service-item">
            Casing Pipe Types
          </Col>
          <Col xs={6} sm={4} md={2} className="service-item">
            Mod Powder Type
          </Col>
        </Row>
        <Row className="footer-social">
  <Col sm={12}>
    <div className="stay-connected">Stay Connected</div>
  </Col>
  <Col sm={12} className="d-flex flex-column align-items-start">
    <div className="contact-number">
      <i className="fas fa-phone"></i> 8489496930, 9585842316
    </div>
    <div className="social-icons">
      <a href="/" className="social-icon">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="/" className="social-icon">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="/" className="social-icon">
        <i className="fab fa-facebook-f"></i>
      </a>
    </div>
  </Col>
</Row>
      </Container>
    </footer>
  );
};

export default Footer;
 