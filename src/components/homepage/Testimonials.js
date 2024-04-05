import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <Container className='mt-5'>
      <h3>Testimonials</h3>
      <Row>
        <Col md='3'>
          <Testimonial
            title='Outstanding Paella'
            rating={4}
            description='A delightful blend of fresh seafood, charcuterie, and grilled meats. Whether you’re a seafood enthusiast or simply love bold flavors, this dish won’t disappoint.'
          />
        </Col>
        <Col md='3'>
          <Testimonial
            title='Great'
            rating={5}
            description='A comforting ratatouille that transports you to the heart of Provence. Layers of tender vegetables—eggplant, zucchini, and tomatoes—meld together in a rich tomato sauce. Pair it with crusty bread and a glass of red wine for a truly rustic delight.'
          />
        </Col>
        <Col md='3'>
          <Testimonial
            title='Charming Dublin Vibes'
            rating={4}
            description='Nestled between Grafton Street and Dawson Street, Little Lemon exudes Mediterranean charm. The cozy ambiance, friendly staff, and tantalizing aromas make it a delightful culinary escape. From the first bite of Paella, you’ll be transported to sun-kissed shores. Don’t miss this Dublin gem!'
          />
        </Col>
        <Col md='3'>
          <Testimonial
            title='Sweet Endings'
            rating={4}
            description='Save room for dessert! Little Lemon surprises with delectable treats. Whether it’s a zesty lemon tart or a creamy gelato, their sweet offerings are the perfect finale to a memorable meal.'
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
