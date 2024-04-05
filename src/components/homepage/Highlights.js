import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import GreekSalad from "../../assets/greek-salad.jpg";
import Ratatouille from "../../assets/ratatouille.jpg";
import Paella from "../../assets/paella.jpg";
import Highlight from "./Highlight";

const Highlights = () => {
  return (
    <div className='mt-5'>
      <Container>
        <Row>
          <Col>
            <h3>Specials</h3>
          </Col>
          <Col className='text-end'>
            <Button variant='warning'>Order online</Button>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col md='4'>
            <Highlight
              name='Greek Salad'
              price='12,50€'
              description='A Greek salad, also known as horiatiki salad, is a classic
                  dish in Greek cuisine. It features fresh, vibrant ingredients
                  that capture the essence of Mediterranean flavors.'
              image={GreekSalad}
              imageAlt='greek-salad'
            />
          </Col>
          <Col md='4'>
            <Highlight
              name='Ratatouille'
              price='14,50€'
              description='A traditional Provençal dish made with stewed vegetables like
              zucchini, eggplant, bell peppers, and tomatoes.'
              image={Ratatouille}
              imageAlt='ratatouille'
            />
          </Col>
          <Col md='4'>
            <Highlight
              name='Paella'
              price='17,50€'
              description='A Spanish rice dish cooked with seafood, chicken, saffron, and
              paprika.'
              image={Paella}
              imageAlt='paella'
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Highlights;
