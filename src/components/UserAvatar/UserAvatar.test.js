import React from "react";
import { render, screen } from "@testing-library/react";
import UserAvatar from "./index";

test("renders UserAvatar with text", () => {
  const text = "JS";

  render(<UserAvatar text={text} />);

  const textElement = screen.getByText(text);
  expect(textElement).toBeInTheDocument();
});
