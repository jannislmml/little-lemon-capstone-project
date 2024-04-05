import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import ReservationsImage from "../../assets/reservations.jpg";
import TimeToggle from "./TimeToggle";
import { useNavigate } from "react-router-dom";
import { initializeTimes } from "./HelpFunctions";

const Reservations = () => {
  const navigate = useNavigate();

  const [people, setPeople] = useState(2);
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const [displayedAvailableTimes, setDisplayedAvailableTimes] = useState([]);
  const [validated, setValidated] = useState(false);

  // initializeTimes
  useEffect(() => {
    if (date) {
      var availableTimes = initializeTimes(date);
      updateTimes(availableTimes);
    }
  }, [date]);

  const updateTimes = (newTimes) => {
    setDisplayedAvailableTimes(newTimes);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else if (time) {
      navigate(`/reservations-checkout/${people}/${date}/${time}`);
    }

    setValidated(true);
  };

  return (
    <div>
      <Container>
        <h2>Reservations</h2>
        <img src={ReservationsImage} alt='reservations' className='mb-3' />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col md='4'>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>People</Form.Label>
                <Form.Control
                  type='number'
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  min={1}
                  max={10}
                  required
                  aria-label='count of people'
                />
                <Form.Control.Feedback type='invalid'>
                  You can not reserve a table for less than 1 person.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md='4'>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Date</Form.Label>
                <Form.Control
                  data-testid='date-input'
                  type='Date'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  aria-label='reservation date'
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide a date.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md='12'>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Time</Form.Label>
                <div>
                  <Row className='text-center'>
                    {displayedAvailableTimes?.map((curTime) => {
                      return (
                        <Col md='3'>
                          <TimeToggle
                            value={curTime}
                            selectedTime={time}
                            setTime={setTime}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md='6'>
              <Button variant='secondary' onClick={() => navigate("/")}>
                Cancel
              </Button>
            </Col>
            <Col md='6' className='text-end'>
              <Button type='submit' variant='success' aria-label='next'>
                Next
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Reservations;
