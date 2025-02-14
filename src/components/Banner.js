import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import "../styles/Banner.css";

const Banner = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showAlreadySubmittedMessage, setShowAlreadySubmittedMessage] =
    useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
  
    try {
      const response = await fetch(
        "https://dc58-157-49-199-123.ngrok-free.app/postcontact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "ngrok-skip-browser-warning": "98547", // ✅ Ensure this header is present
          },
          body: JSON.stringify({ contact: mobileNumber }),
        }
      );
  
      if (response.ok) {
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
        setMobileNumber("");
      } else if (response.status === 400) {
        setShowAlreadySubmittedMessage(true);
        setTimeout(() => setShowAlreadySubmittedMessage(false), 3000);
      } else {
        const data = await response.json();
        setError(data.detail || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    }
  };
  

  return (
    <div className="banner-section">
      {showSuccessMessage && (
        <Alert variant="success" className="fixed-message">
          <FaCheckCircle className="me-2" /> We will contact you soon!
        </Alert>
      )}

      {showAlreadySubmittedMessage && (
        <Alert variant="warning" className="fixed-message">
          <FaExclamationTriangle className="me-2" /> Your number is already
          stored. We will contact you soon!
        </Alert>
      )}

      {error && (
        <Alert variant="danger" className="fixed-message">
          <FaExclamationTriangle className="me-2" /> {error}
        </Alert>
      )}

      <div className="banner-overlay">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="banner-content">
              <h1>Reliable Borewell Solutions for Your Water Needs</h1>
              <h5>
                From Borewell Drilling to Groundwater Solutions, our
                precision-led, expertise-driven approach ensures sustainable
                water access for your needs.
              </h5>
              <Form className="contact-sec" onSubmit={handleSubmit}>
                <Form.Group controlId="mobileNumber" className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder="Enter Mobile Number"
                    className="mobile-input"
                    value={mobileNumber}
                    onChange={(e) => {
                      setMobileNumber(e.target.value);
                      setError("");
                    }}
                    isInvalid={!!error}
                  />
                  <Button
                    variant="primary"
                    className="contact-button"
                    type="submit"
                  >
                    Contact Us
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    {error}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
