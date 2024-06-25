import React from "react";
import { render, screen } from "@testing-library/react";
import PercentageCard from "./index";

test("renders PercentageCard with value and title", () => {
  const value = 85;
  const title = "UPLOAD SUCCESS";

  render(<PercentageCard value={value} title={title} />);

  const valueElement = screen.getByText(`${value}%`);
  expect(valueElement).toBeInTheDocument();

  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();
});
