import { render, screen } from "@testing-library/react";
import Highlight from "./Highlight";

test("find hightlight name", () => {
  render(
    <Highlight
      name='Greek Salad'
      price='12,50€'
      description='A Greek salad, also known as horiatiki salad, is a classic
        dish in Greek cuisine. It features fresh, vibrant ingredients
        that capture the essence of Mediterranean flavors.'
      imageAlt='greek-salad'
    />
  );
  const headingElement = screen.getByText("Greek Salad");
  expect(headingElement).toBeInTheDocument();
});
