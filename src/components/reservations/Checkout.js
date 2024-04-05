import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { submitAPI } from "../../utils/fakeAPI";

const Checkout = () => {
  const navigate = useNavigate();
  let { peopleParam, dateParam, timeParam } = useParams();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [comment, setComment] = useState("");

  const [validated, setValidated] = useState(false);

  const handleReserve = () => {
    var data = {
      people: peopleParam,
      date: dateParam,
      time: timeParam,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      comment: comment,
    };

    var res = submitAPI(data);

    if (res) {
      navigate(
        `/reservations-confirm/${data.people}/${data.date}/${data.time}/${data.firstName}/${data.lastName}/${data.phone}/${data.email}/${data.comment}`
      );
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      handleReserve();
    }

    setValidated(true);
  };

  return (
    <Container>
      <div
        className='ll-primaray-background-color'
        style={{ borderRadius: "1em", marginBottom: "3em" }}
      >
        <h2>Your Reservation</h2>
        <div
          style={{
            backgroundColor: "lightgray",
            borderRadius: "1em",
            padding: "1em",
            paddingLeft: "3em",
            color: "black",
          }}
        >
          <h5>{new Date(dateParam).toLocaleDateString()}</h5>
          <h5>{timeParam}</h5>
          <h5>{peopleParam} People</h5>
        </div>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div
          className='ll-primaray-background-color'
          style={{ borderRadius: "1em" }}
        >
          <h2>Contact Details</h2>

          <Row>
            <Col md='6'>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  data-testid='firstNameInput'
                  type='text'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder='First Name'
                  required
                  aria-label='first name input'
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide this field.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md='6'>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  data-testid='lastNameInput'
                  type='text'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder='Last Name'
                  required
                  aria-label='last name input'
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide this field.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              data-testid='phoneInput'
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Phone'
              required
              aria-label='phone input'
            />
            <Form.Control.Feedback type='invalid'>
              Please provide this field.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              data-testid='emailInput'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              required
              aria-label='email input'
            />
            <Form.Control.Feedback type='invalid'>
              Please provide this field.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Comment</Form.Label>
            <Form.Control
              type='text'
              as='textarea'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder='Comment'
              aria-label='comment textarea'
            />
          </Form.Group>
        </div>

        <Row className='mt-4'>
          <Col md='6'>
            <Button
              variant='secondary'
              onClick={() => navigate("/reservations")}
            >
              Back
            </Button>
          </Col>
          <Col md='6' className='text-end'>
            <Button
              type='submit'
              variant='success'
              data-testid='submitButton'
              aria-label='submit reservation'
            >
              Reserve
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Checkout;
