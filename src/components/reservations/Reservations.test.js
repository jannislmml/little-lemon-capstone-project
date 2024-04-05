import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HashRouter } from "react-router-dom";
import Reservations from "./Reservations";
import { initializeTimes } from "./HelpFunctions";

test("find button with router", () => {
  render(
    <HashRouter>
      <Reservations />
    </HashRouter>
  );

  const button = screen.getByText("Next");
  expect(button).toBeInTheDocument();
});

test("click time toggle", () => {
  render(
    <HashRouter>
      <Reservations />
    </HashRouter>
  );

  const dateInput = screen.getByTestId("date-input");
  fireEvent.change(dateInput, { target: { value: "2024-03-26" } });

  const timeToggle = screen.getByText("19:00");
  fireEvent.click(timeToggle);
  expect(timeToggle).toBeInTheDocument();
});

test("initializeTimes", () => {
  const result = initializeTimes("2024-03-27");
  expect(result.length).toBeGreaterThanOrEqual(1);
});
