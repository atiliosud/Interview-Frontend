import React from "react";
import { Container, PercentageTitle, PercentageText } from "./styles";
import Card from "../Card";
import Row from "../shared/Row";

function PercentageCard({ value, title }) {
  return (
    <Container>
      <Card>
        <PercentageText>{value}%</PercentageText>
        <PercentageTitle>{title}</PercentageTitle>
      </Card>
    </Container>
  );
}

export default PercentageCard;
