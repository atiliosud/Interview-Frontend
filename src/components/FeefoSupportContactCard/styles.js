import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const ContainerContactInfo = styled.div`
  display: flex;
  gap: 15px;
`;
export const ContainerContactSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Subtitle = styled.h5`
  color: #bdbbbb;
  font-size: 1.2rem;
`;
export const Text = styled.p`
  color: #4b4749;
  font-size: 1.2rem;
  font-weight: ${(props) => (props.bold ? "bold" : "regular")};
`;
