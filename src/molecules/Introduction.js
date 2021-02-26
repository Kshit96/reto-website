import React from 'react'
import styled from "styled-components";
import {Col, Container, Image, Row} from "react-bootstrap";
import logo from "../assets/logo.svg";
import {
  CenterHeadingYellow
} from "../atoms/Headings";

export const StyledCenterRow = styled(Row)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledPYellow = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 2rem;
color: #ffc13b;
text-align: center;
width: auto;

@media (max-width: 992px){
   font-size: 5vw;
}

@media (max-width: 576px){
   font-size: 1.5rem;
}

@keyframes enter-screen-bottom {
  0% {
    margin-top: -30vw;
  }
  100% {
    margin-top: 0;
  }
}

  animation: enter-screen-bottom 2s 2.7s backwards;
  z-index:0;

`;

const StyledImage = styled(Image)`  
  @keyframes enter-screen-top {
    0% {
      margin-bottom: -25vw;
    }
    100% {
      margin-bottom: 0;
    }
  }

  animation: enter-screen-top 2s 3s backwards;
  z-index: 1;

  padding: 1rem 1rem 1rem 1rem;
  
  @media (max-width: 576px){
     @keyframes enter-screen-top-mobile {
    0% {
      margin-bottom: -32vw;
    }
    100% {
      margin-bottom: 0;
    }
  }

  animation: enter-screen-top-mobile 2s 3s backwards;
}

`

export const StyledCol = styled(Col)`
overflow: hidden;
`;

export const Introduction = props => {
  return (
      <Container>
        <StyledCenterRow>
          <StyledCol xs={8} lg={4}>
            <StyledImage src={logo} fluid/>
          </StyledCol>
          <StyledCol xs={8}>
            <StyledPYellow >You're the game</StyledPYellow>
          </StyledCol>
        </StyledCenterRow>
      </Container>
  )
}

export default Introduction
