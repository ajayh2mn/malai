import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Toast, ToastContainer } from "react-bootstrap";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import "../styles/EighthSection.css";

const EighthSection = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showAlreadySubmittedMessage, setShowAlreadySubmittedMessage] = useState(false);
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
        "https://955e-2409-408d-3c33-4f76-a47a-7805-b96b-7caf.ngrok-free.app/postcontact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
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
    <div className="banner-section">
      {/* Toast Messages */}
      <ToastContainer position="top-center" className="p-3">
        {showSuccessMessage && (
          <Toast bg="success" onClose={() => setShowSuccessMessage(false)} delay={3000} autohide>
            <Toast.Header>
              <FaCheckCircle className="me-2 text-success" />
              <strong className="me-auto">Success</strong>
            </Toast.Header>
            <Toast.Body className="text-white">We will contact you soon!</Toast.Body>
          </Toast>
        )}

        {showAlreadySubmittedMessage && (
          <Toast bg="warning" onClose={() => setShowAlreadySubmittedMessage(false)} delay={3000} autohide>
            <Toast.Header>
              <FaExclamationTriangle className="me-2 text-warning" />
              <strong className="me-auto">Notice</strong>
            </Toast.Header>
            <Toast.Body className="text-dark">Your number is already stored. We will contact you soon!</Toast.Body>
          </Toast>
        )}

        {error && (
          <Toast bg="danger" onClose={() => setError("")} delay={3000} autohide>
            <Toast.Header>
              <FaExclamationTriangle className="me-2 text-danger" />
              <strong className="me-auto">Error</strong>
            </Toast.Header>
            <Toast.Body className="text-white">{error}</Toast.Body>
          </Toast>
        )}
      </ToastContainer>

      <div className="banner-overlay">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={8} lg={6} className="banner-content text-center">
              <h1>Reliable Borewell Solutions for Your Water Needs</h1>
              <h5>
                From Borewell Drilling to Groundwater Solutions, our expertise-driven approach ensures sustainable
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
                  <Button variant="primary" className="contact-button" type="submit">
                    Contact Us
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default EighthSection;