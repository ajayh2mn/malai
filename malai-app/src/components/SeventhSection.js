import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AdvantageImage from '../assets/Our-Advantages.png';
import '../styles/SeventhSection.css';

const SeventhSection = () => {
  return (
    <section className="seventh-section">
      <Container className="text-center">
        <Row>
          <Col>
            <h1>Advantages of Our Borewell Service</h1>
            <h4>
              Borewell water is a clean, reliable underground source for homes, farms, and industries year-round
            </h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10} lg={8} className="mx-auto">
            <img
              src={AdvantageImage}
              alt="Borewell Service"
              className="seventh-section-image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SeventhSection;
