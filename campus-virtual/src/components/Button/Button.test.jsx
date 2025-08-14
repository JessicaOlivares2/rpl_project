import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renderiza el botón con el texto correcto", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});
