import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../styles/SixthSection.css"; // Importing CSS file for custom styling
import UserImage from "../assets/user-image1.jpeg"; // Importing local image
import UserImage2 from "../assets/user-image2.jpeg";

const testimonials = [
  {
    img: UserImage,
    text: "Malai Borewells provides excellent repair and services for borewells at a reasonable price. Their team is highly skilled and professional, ensuring a quick and efficient solution to all your borewell issues.",
    name: "Bala Chandru",
  },
  {
    img: UserImage2,
    text: "I recently used Malai Borewells for a pump repair, and I was very impressed with their quick service. They arrived on time and fixed the issue efficiently. Excellent service overall!",
    name: "Naveen kumar",
  },
];

const SixthSection = () => {
  return (
    <section className="sixth-section">
      <Container className="text-center my-5">
        <h1 className="section-heading">Client Testimonials</h1>
        <Row className="justify-content-center">
          {testimonials.map((testimonial, index) => (
            <Col md={6} lg={5} className="mb-4" key={index}>
              <Card className="user-review-card">
                <Card.Img variant="top" src={testimonial.img} className="user-img" />
                <Card.Body>
                  <Card.Text className="user-description">"{testimonial.text}"</Card.Text>
                  <Card.Title className="user-name">{testimonial.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SixthSection;
