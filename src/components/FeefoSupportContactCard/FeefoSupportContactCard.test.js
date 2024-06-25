import React from "react";
import { render, screen } from "@testing-library/react";
import FeefoSupportContactCard from "./index";

const mockContactInfo = {
  name: "John Smith",
  email: "john.smith@feefo.com",
  phone: "020 3362 4208",
};

test("renders FeefoSupportContactCard with contact information", () => {
  render(<FeefoSupportContactCard contactInfo={mockContactInfo} />);

  const subtitleElement = screen.getByText(/YOUR FEEFO SUPPORT CONTACT/i);
  expect(subtitleElement).toBeInTheDocument();

  const contactName = screen.getByText(/John Smith/i);
  expect(contactName).toBeInTheDocument();

  const contactEmail = screen.getByText(/john.smith@feefo.com/i);
  expect(contactEmail).toBeInTheDocument();

  const contactPhone = screen.getByText(/020 3362 4208/i);
  expect(contactPhone).toBeInTheDocument();
});
