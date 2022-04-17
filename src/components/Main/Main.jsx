import React from "react";
import styled from "styled-components";
import { Container } from "../Container/Container";
import { mediaVars } from "../mediaVars";

const Wrapper = styled.main`
  padding: 2rem 0;
  @media (min-width: ${mediaVars.md}) {
    padding: 4rem 0;
  } ;
`;

const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Main;
