import React from "react";
import { render, screen } from "@testing-library/react";
import AccountOverviewHeader from "./index";

const mockContactInfo = {
  name: "John Smith",
  email: "john.smith@feefo.com",
  phone: "020 3362 4208",
};

test("renders AccountOverviewHeader with provided contact information", () => {
  render(<AccountOverviewHeader contactInfo={mockContactInfo} />);

  const titleElement = screen.getByText(/Account Overview/i);
  expect(titleElement).toBeInTheDocument();

  const contactName = screen.getByText(/John Smith/i);
  expect(contactName).toBeInTheDocument();

  const contactEmail = screen.getByText(/john.smith@feefo.com/i);
  expect(contactEmail).toBeInTheDocument();

  const contactPhone = screen.getByText(/020 3362 4208/i);
  expect(contactPhone).toBeInTheDocument();
});
