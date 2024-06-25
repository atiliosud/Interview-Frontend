import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: center;
  gap: ${(props) => (props.gap ? `${props.gap}px` : "0px")};
`;
