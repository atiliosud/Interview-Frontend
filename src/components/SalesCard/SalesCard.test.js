import React from "react";
import { render, screen } from "@testing-library/react";
import SalesCard from "./index";

const mockSalesOverview = {
  uploads: 8,
  linesSaved: 4,
};

test("renders SalesCard title", () => {
  render(<SalesCard salesOverview={mockSalesOverview} />);

  const titleElement = screen.getByText(/Sales/i);
  expect(titleElement).toBeInTheDocument();
});
