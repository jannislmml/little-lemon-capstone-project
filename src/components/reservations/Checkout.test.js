import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HashRouter } from "react-router-dom";
import Checkout from "./Checkout";

test("valid first name", () => {
  render(
    <HashRouter>
      <Checkout />
    </HashRouter>
  );

  const firstNameInput = screen.getByTestId("firstNameInput");
  fireEvent.change(firstNameInput, { target: { value: "Max" } });

  const submitButton = screen.getByTestId("submitButton");
  fireEvent.click(submitButton);

  expect(firstNameInput).toBeValid();
});

test("invalid first name", () => {
  render(
    <HashRouter>
      <Checkout />
    </HashRouter>
  );

  const firstNameInput = screen.getByTestId("firstNameInput");

  const submitButton = screen.getByTestId("submitButton");
  fireEvent.click(submitButton);

  expect(firstNameInput).toBeInvalid();
});

test("valid last name", () => {
  render(
    <HashRouter>
      <Checkout />
    </HashRouter>
  );

  const lastNameInput = screen.getByTestId("lastNameInput");
  fireEvent.change(lastNameInput, { target: { value: "Mustermann" } });

  const submitButton = screen.getByTestId("submitButton");
  fireEvent.click(submitButton);

  expect(lastNameInput).toBeValid();
});

test("invalid last name", () => {
  render(
    <HashRouter>
      <Checkout />
    </HashRouter>
  );

  const lastNameInput = screen.getByTestId("lastNameInput");

  const submitButton = screen.getByTestId("submitButton");
  fireEvent.click(submitButton);

  expect(lastNameInput).toBeInvalid();
});

test("valid phone", () => {
  render(
    <HashRouter>
      <Checkout />
    </HashRouter>
  );

  const phoneInput = screen.getByTestId("phoneInput");
  fireEvent.change(phoneInput, { target: { value: "0176 24835292" } });

  const submitButton = screen.getByTestId("submitButton");
  fireEvent.click(submitButton);

  expect(phoneInput).toBeValid();
});

test("invalid phone", () => {
  render(
    <HashRouter>
      <Checkout />
    </HashRouter>
  );

  const phoneInput = screen.getByTestId("phoneInput");

  const submitButton = screen.getByTestId("submitButton");
  fireEvent.click(submitButton);

  expect(phoneInput).toBeInvalid();
});

test("valid email", () => {
  render(
    <HashRouter>
      <Checkout />
    </HashRouter>
  );

  const emailInput = screen.getByTestId("emailInput");
  fireEvent.change(emailInput, { target: { value: "max@mustermann.com" } });

  const submitButton = screen.getByTestId("submitButton");
  fireEvent.click(submitButton);

  expect(emailInput).toBeValid();
});

test("invalid empty email", () => {
  render(
    <HashRouter>
      <Checkout />
    </HashRouter>
  );

  const emailInput = screen.getByTestId("emailInput");

  const submitButton = screen.getByTestId("submitButton");
  fireEvent.click(submitButton);

  expect(emailInput).toBeInvalid();
});

test("invalid email", () => {
  render(
    <HashRouter>
      <Checkout />
    </HashRouter>
  );

  const emailInput = screen.getByTestId("emailInput");
  fireEvent.change(emailInput, { target: { value: "max" } });

  const submitButton = screen.getByTestId("submitButton");
  fireEvent.click(submitButton);

  expect(emailInput).toBeInvalid();
});
