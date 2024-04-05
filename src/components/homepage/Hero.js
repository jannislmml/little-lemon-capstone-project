import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import HeroImage from "../../assets/hero-image.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className='ll-primaray-background-color'>
      <Container>
        <Row>
          <Col sm='6'>
            <h1 className='ll-secondary-color'>Little Lemon</h1>
            <h3 className='ll-white-color'>Chicago</h3>
            <p className='ll-white-color'>
              An authentic Mediterranean restaurant in Chicago. We are a
              family-owned establishment specializing in traditional recipes
              with a modern twist. Our cuisine blends the flavors of the
              Mediterranean with contemporary presentation.
            </p>
            <Button
              variant='warning'
              className='ll-secondary-background-color'
              onClick={() => navigate("/reservations")}
            >
              Reserve table
            </Button>
          </Col>
          <Col sm='6'>
            <img src={HeroImage} alt='heroimage' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
