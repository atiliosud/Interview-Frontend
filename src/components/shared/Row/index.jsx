import React from "react";

import { Container } from "./styles";

function Row({ justifyContent, gap, children }) {
  return (
    <Container justifyContent={justifyContent} gap={gap}>
      {children}
    </Container>
  );
}

export default Row;
