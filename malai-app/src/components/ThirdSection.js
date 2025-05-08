import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/ThirdSection.css"; // Custom CSS for additional styling

const ThirdSection = () => {
  return (
    <div className="third-section">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="third-section-heading">
              Precision and Expertise for Reliable Water Access
            </h2>
            <p className="third-section-subheading">
              An approach that prioritizes your water needs with sustainable and efficient solutions.
              <br />
              Let me know if you'd like additional adjustments or another angle!
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={4}>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-smile"></i>
              </div>
              <h3 className="stat-value">1000+</h3>
              <p className="stat-label">Happy Customers</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-clipboard-check"></i>
              </div>
              <h3 className="stat-value">1600+</h3>
              <p className="stat-label">Completed Projects</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3 className="stat-value">20+</h3>
              <p className="stat-label">Experienced Resources</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThirdSection;
