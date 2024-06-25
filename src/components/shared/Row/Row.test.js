import React from "react";
import { render, screen } from "@testing-library/react";
import Row from "./index";

jest.mock("./styles", () => ({
  Container: ({ children, justifyContent, gap }) => (
    <div data-testid="container" style={{ justifyContent, gap }}>
      {children}
    </div>
  ),
}));

test("renders Row component with justifyContent and gap", () => {
  const childrenText = "This is a child element";
  const justifyContent = "space-between";
  const gap = "10px";

  render(
    <Row justifyContent={justifyContent} gap={gap}>
      <div>{childrenText}</div>
    </Row>
  );

  const childElement = screen.getByText(childrenText);
  expect(childElement).toBeInTheDocument();

  const containerElement = screen.getByTestId("container");
  expect(containerElement).toHaveStyle(`justifyContent: ${justifyContent}`);
  expect(containerElement).toHaveStyle(`gap: ${gap}`);
});
