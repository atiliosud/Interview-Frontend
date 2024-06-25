import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  ContainerContactInfo,
  ContainerContactSummary,
  Subtitle,
  Text,
} from "./styles";
import UserAvatar from "../UserAvatar";
import Row from "../shared/Row";

function FeefoSupportContactCard({ contactInfo }) {
  return (
    <Container>
      <Subtitle>YOUR FEEFO SUPPORT CONTACT</Subtitle>
      <ContainerContactInfo>
        <UserAvatar text={contactInfo.name[0].toUpperCase()} />

        <ContainerContactSummary>
          <Text bold={true}>{contactInfo.name}</Text>
          <Row>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ marginRight: 10, color: "#4b4749" }}
            />
            <Row gap={40} justifyContent="space-between">
              <Text>{contactInfo.email}</Text>
              <Text>{contactInfo.phone}</Text>
            </Row>
          </Row>
        </ContainerContactSummary>
      </ContainerContactInfo>
    </Container>
  );
}

export default FeefoSupportContactCard;
