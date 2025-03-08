import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../styles/SixthSection.css"; // Importing CSS file for custom styling

const testimonials = [
  {
    img: "https://files.oaiusercontent.com/file-9ihBUSypoFhiYwcTkLBgdy?se=2025-03-08T18%3A42%3A21Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db627dc07-eed1-4df9-8179-28e37dad1af2.webp&sig=09PoioGZnDTsL0t%2B5MHv1do2YzM/WgDcFmlo/cOZCCc%3D",
    text: "Malai Borewells provides excellent repair and services for borewells at a reasonable price. Their team is highly skilled and professional, ensuring a quick and efficient solution to all your borewell issues.",
    name: "Bala Chandru",
  },
  {
    img: "https://profile.justdial.com/profileImg?i=O0ZtzRiaYDPqxqxiOXFWFA%2BTjcUyQt%2BuUEe41%2BkBqoo%3D",
    text: "I recently used Malai Borewells for a pump repair, and I was very impressed with their quick service. They arrived on time and fixed the issue efficiently. Excellent service overall!",
    name: "Puducherry Travels",
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
