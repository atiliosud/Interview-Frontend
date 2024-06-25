import React from "react";
import { render, screen } from "@testing-library/react";
import AccountOverview from "./account-overview";

const accountOverviewStub = {
  supportContact: {
    name: "John Smith",
    email: "john.smith@feefo.com",
    phone: "020 3362 4208",
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  },
};

test("renders AccountOverview component with provided data", () => {
  render(<AccountOverview data={accountOverviewStub} />);

  const contactName = screen.getByText(/John Smith/i);
  expect(contactName).toBeInTheDocument();

  const contactEmail = screen.getByText(/john.smith@feefo.com/i);
  expect(contactEmail).toBeInTheDocument();

  const contactPhone = screen.getByText(/020 3362 4208/i);
  expect(contactPhone).toBeInTheDocument();

  const uploadSuccess = screen.getByText(/UPLOAD SUCCESS/i);
  expect(uploadSuccess).toBeInTheDocument();
  const uploadSuccessValue = screen.getByText(/3%/i);
  expect(uploadSuccessValue).toBeInTheDocument();

  const linesSaved = screen.getByText(/LINES SAVED/i);
  expect(linesSaved).toBeInTheDocument();
  const linesSavedValue = screen.getByText(/20%/i);
  expect(linesSavedValue).toBeInTheDocument();
});
