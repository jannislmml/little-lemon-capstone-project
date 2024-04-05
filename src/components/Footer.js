import React from "react";

import Logo from "../assets/Logo.png";
import { Col, Container, Row } from "react-bootstrap";

const Footer = ({}) => {
  return (
    <footer className='footer mt-5 p-3'>
      <Container>
        <Row>
          <Col md='3'>
            <img src={Logo} alt='logo' />
          </Col>
          <Col md='3'>
            <a href='/about'>About</a>
            <a href='/imprint'>Imprint</a>
            <a href='/privacy-policy'>Privacy policy</a>
            <a href='/affiliate'>Affiliate</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
