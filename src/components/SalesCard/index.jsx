import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faUpload } from "@fortawesome/free-solid-svg-icons";
import { Container, Title, Text, ContainerCardContent } from "./styles";
import Card from "../Card";
import Row from "../shared/Row";

function SalesCard({ salesOverview }) {
  return (
    <Container>
      <Card>
        <Row justifyContent="space-between">
          <Row>
            <FontAwesomeIcon
              icon={faUpload}
              style={{ marginRight: 10, color: "#3eb1eb", fontSize: "1.5rem" }}
            />
            <Title>Sales</Title>
          </Row>
          <FontAwesomeIcon
            icon={faInfoCircle}
            style={{ marginRight: 10, color: "#bfbbbb", fontSize: "1.5rem" }}
          />
        </Row>
        <ContainerCardContent>
          <Row justifyContent="space-between">
            <Text>
              You had
              <strong> {salesOverview.uploads} uploads </strong>
              and
              <strong> {salesOverview.linesSaved} </strong>
              lines added.
            </Text>
          </Row>
        </ContainerCardContent>
      </Card>
    </Container>
  );
}

export default SalesCard;
