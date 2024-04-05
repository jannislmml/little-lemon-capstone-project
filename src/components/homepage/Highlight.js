import React from "react";
import { Col, Row } from "react-bootstrap";

const Highlight = ({ name, price, description, image, imageAlt }) => {
  return (
    <div className='highlight'>
      <img src={image} alt={imageAlt} />
      <div className='p-3'>
        <Row>
          <Col>
            <h6>{name}</h6>
          </Col>
          <Col className='text-end'>
            <h6>{price}</h6>
          </Col>
        </Row>
        <p>{description}</p>
        <h6>Show more</h6>
      </div>
    </div>
  );
};

export default Highlight;
