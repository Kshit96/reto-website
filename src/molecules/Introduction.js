import React from 'react'
import styled from "styled-components";
import {Col, Container, Image, Row} from "react-bootstrap";
import logo from "../assets/r3to.png";
import {
  CenterHeadingYellow
} from "../atoms/Headings";

export const StyledCenterRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledPYellow = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 3vw;
color: #ffc13b;
text-align: center;
width: auto;

@media (max-width: 992px){
   font-size: 3vw;
}

@keyframes enter-screen-bottom {
  0% {
    margin-top: -30vw;
  }
  100% {
    margin-top: 0;
  }
}

  animation: enter-screen-bottom 2s 4s backwards;
  z-index:0;

`;

const StyledImage = styled(Image)`  
  @keyframes enter-screen-top {
  0% {
    margin-bottom: -20vw;
  }
  100% {
    margin-bottom: 0;
  }
}

  animation: enter-screen-top 2s 3s backwards;
  z-index: 1;

  padding: 1rem 1rem 1rem 1rem;

`

export const StyledCol = styled(Col)`
overflow: hidden;
`;

export const Introduction = props => {
  return (
      <Container>
        <StyledCenterRow>
          <StyledCol xs={3}>
            <StyledImage src={logo} fluid/>
          </StyledCol>
          <StyledCol xs={12}>
            <StyledPYellow >You're the game</StyledPYellow>
          </StyledCol>
        </StyledCenterRow>
      </Container>
  )
}

export default Introduction
