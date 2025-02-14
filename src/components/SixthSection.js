import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import '../styles/SixthSection.css';  // Importing CSS file for custom styling

const SixthSection = () => {
  return (
    <section className="sixth-section">
    <Container className="text-center my-5">
      <h1 className="section-heading">Client Testimonials</h1>
      <Row className="justify-content-center">
        <Col md={5} className="mb-4">
          <Card className="user-review-card">
            <Card.Img variant="top" src="https://profile.justdial.com/profileImg?i=VDlZbgo904fdRjsP35ivXUh2NFDQcQKBYr3CZv9c%2Bow%3D" className="user-img" />
            <Card.Body>
              <Card.Text className="user-description">
                "Malai Borewells provides excellent repair and services for borewells at a reasonably priced. Their team is highly skilled and professional, ensuring a quick and efficient solution to all your borewell issues. With their top-notch service, you can trust Malai Borewells to deliver exceptional results every time."
              </Card.Text>
              <Card.Title className="user-name">Bala Chandru</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5} className="mb-4">
          <Card className="user-review-card">
            <Card.Img variant="top" src="https://profile.justdial.com/profileImg?i=O0ZtzRiaYDPqxqxiOXFWFA%2BTjcUyQt%2BuUEe41%2BkBqoo%3D" className="user-img" />
            <Card.Body>
              <Card.Text className="user-description">
                "I recently used Malai Borewells for a pump repair, and I was very impressed with their quick service. They arrived on time and fixed the issue efficiently. Excellent service overall!. With their top-notch service, you can trust Malai Borewells to deliver exceptional results every time."
              </Card.Text>
              <Card.Title className="user-name">Puducherry Travels
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default SixthSection;
