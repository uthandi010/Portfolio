import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  window.scrollTo = jest.fn();
});

test("renders the main portfolio sections", () => {
  render(<App />);
  expect(screen.getByRole("main")).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { level: 1, name: /web & mobile/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /full-stack projects/i, level: 2 })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /skip to main content/i })).toBeInTheDocument();
});

test("chat widget opens as a labelled dialog", () => {
  render(<App />);
  fireEvent.click(
    screen.getByRole("button", { name: /open portfolio quick answers/i })
  );
  expect(
    screen.getByRole("dialog", { name: /quick answers/i })
  ).toBeInTheDocument();
});
