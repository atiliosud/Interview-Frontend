import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5%;
  margin-bottom: 30px;

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const Title = styled.h1`
  color: #555254;
  font-size: 2rem;
`;
