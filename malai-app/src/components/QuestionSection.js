import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import '../styles/QuestionSection.css';

const QuestionSection = () => {
  return (
    <div className="question-section">
    <Container className="faq-section my-5">
      <h1 className="text-center mb-4">Frequently Asked Questions</h1>
      <h5 className="text-center mb-5">Find questions and answers related to the design system, purchase, updates, and support.</h5>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What services does Malai Borewells offer?</Accordion.Header>
          <Accordion.Body>
            Malai Borewells specializes in borewell drilling, pump installation, soil testing, and water yield analysis.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How do I know the right location for borewell drilling?</Accordion.Header>
          <Accordion.Body>
            Our team conducts thorough geophysical surveys to determine the most suitable location for drilling borewells.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is the average time required for borewell drilling?</Accordion.Header>
          <Accordion.Body>
            The time required depends on the depth and terrain. Typically, it takes 2-3 days for standard drilling projects.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Does Malai Borewells provide post-installation services?</Accordion.Header>
          <Accordion.Body>
            Yes, we offer comprehensive post-installation services, including pump maintenance and borewell cleaning.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>What are the costs associated with borewell drilling?</Accordion.Header>
          <Accordion.Body>
            The costs vary based on depth, location, and soil conditions. Contact us for a detailed quotation.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>How do I schedule a consultation with Malai Borewells?</Accordion.Header>
          <Accordion.Body>
            You can schedule a consultation by calling our customer service or through our website’s contact form.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
    </div>
  );
};

export default QuestionSection;
