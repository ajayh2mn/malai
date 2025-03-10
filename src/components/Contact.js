import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showAlreadySubmittedMessage, setShowAlreadySubmittedMessage] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      const response = await fetch(
        "https://955e-2409-408d-3c33-4f76-a47a-7805-b96b-7caf.ngrok-free.app/postcontact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "ngrok-skip-browser-warning": "98547",
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
    <Container fluid className="contact-container">
      {showSuccessMessage && (
        <Alert variant="success" className="fixed-message">
          <FaCheckCircle className="me-2" /> We will contact you soon!
        </Alert>
      )}

      {showAlreadySubmittedMessage && (
        <Alert variant="warning" className="fixed-message">
          <FaExclamationTriangle className="me-2" /> Your number has already
          been stored. We will contact you soon.
        </Alert>
      )}

      <Row className="contact-row">
        <Col md={5} className="contact-info">
          <h3>Contact Information</h3>
          <p>Say something to start a live chat!</p>
          <ul>
            <li>
              <i className="fas fa-phone"></i> +91 8489946930
            </li>
            <li>
              <i className="fas fa-envelope"></i> malaagencybore@gmail.com
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> 132 Villianur Street,
              Pondicherry
              <br />
              605110, India
            </li>
          </ul>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </Col>
        <Col md={7} className="contact-form">
          <h3>Contact Us</h3>
          <p>Any questions or remarks? Just write us a message!</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="mobileNumber">
              <Form.Control
                type="text"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                  setError("");
                }}
                isInvalid={!!error}
              />
              <Form.Control.Feedback type="invalid">
                {error}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" className="contact-us-btn">
              Contact us
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;