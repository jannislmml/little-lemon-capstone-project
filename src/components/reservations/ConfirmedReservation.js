import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ConfirmedReservation = () => {
  let {
    peopleParam,
    dateParam,
    timeParam,
    fistNameParam,
    lastNameParam,
    phoneParam,
    emailParam,
    commentParam,
  } = useParams();
  return (
    <Container>
      <div
        className='ll-primaray-background-color'
        style={{ borderRadius: "1em", marginBottom: "3em" }}
      >
        <h2>Reservation Confirmed</h2>
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
          <h5>
            {fistNameParam} {lastNameParam}
          </h5>
          <h5>{phoneParam}</h5>
          <h5>{emailParam}</h5>
          <h5>{commentParam}</h5>
        </div>
      </div>
    </Container>
  );
};

export default ConfirmedReservation;
