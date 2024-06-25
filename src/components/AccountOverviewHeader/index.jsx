import React from "react";

import { Container, Title } from "./styles";
import FeefoSupportContactCard from "../FeefoSupportContactCard";

function AccountOverviewHeader({ contactInfo }) {
  return (
    <Container>
      <Title>Account Overview</Title>
      <FeefoSupportContactCard contactInfo={contactInfo} />
    </Container>
  );
}

export default AccountOverviewHeader;
