import React from 'react';
import '../styles/Services.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  const services = [
    {
      title: 'Drilling Types',
      items: ['Hand Bore', 'File Bore', 'Machine Bore', 'Rotary Rig Bore', 'Hand Rig Bore'],
    },
    {
      title: 'Casing Pipe Types',
      items: ['Malai Pipe', 'Jain Pipe', 'Findex Pipe', 'Bhavani Pipe'],
    },
    {
      title: 'Mod Powder Types',
      items: [
        'Malai Quality Powder',
        'Malai Clay Balls Bag',
        'Vidya Enterprises',
        'SS Minerals',
      ],
    },
    {
      title: 'Motor Types',
      items: ['CRI', 'Sharp', 'Aqua Tex', 'Lakshmi', 'Texmo Tra'],
    },
    {
      title: 'Available',
      items: ['Air Compressor', 'Water Tanker', 'Transport', 'JCB'],
    },
  ];

  return (
    <section className="my-services">
    <Container className="services-container">
      <h1 className="services-header">Our Services</h1>
      <Row className="services-row">
        {services.map((service, index) => (
          <Col key={index} md={6} lg={4} className="services-col">
            <Card className="services-card">
              <Card.Body>
                <Card.Title className="services-title">{service.title}</Card.Title>
                <ul className="services-list">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="services-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
  );
};

export default Services;
