import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Reservations from "./reservations/Reservations";
import Checkout from "./reservations/Checkout";
import ConfirmedReservation from "./reservations/ConfirmedReservation";

const Main = ({}) => {
  return (
    <main>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/reservations' element={<Reservations />} />
          <Route
            path='/reservations-checkout/:peopleParam/:dateParam/:timeParam'
            element={<Checkout />}
          />
          <>
            <Route
              path='/reservations-confirm/:peopleParam/:dateParam/:timeParam/:firstNameParam/:lastNameParam/:phoneParam/:emailParam/:commentParam'
              element={<ConfirmedReservation />}
            />
            <Route
              path='/reservations-confirm/:peopleParam/:dateParam/:timeParam/:firstNameParam/:lastNameParam/:phoneParam/:emailParam'
              element={<ConfirmedReservation />}
            />
          </>
        </Routes>
      </Router>
    </main>
  );
};

export default Main;
