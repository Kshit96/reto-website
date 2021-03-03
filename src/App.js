import React from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import Story from './molecules/Story'
import Features from './molecules/Features'
import {Footer} from "./molecules/Footer";
import Introduction from "./molecules/Introduction";
import Tagline from "./molecules/Tagline";
import blueBackground from "./assets/blueBackground.svg";
import Sports from "./assets/sports.svg";
import orangeBackground from "./assets/orangeBackground.svg";
import yellowBackground from "./assets/yellowBackground.svg";
import IntroBG from "./assets/IntroductionBackground.svg";
import ComingSoon from "./molecules/ComingSoon";

const StyledContainer = styled(Container)`
  scroll-snap-type: y mandatory;
  overflow: auto;
  height: 100vh;
  width: 100vw;
  padding: 0;
`;

const StyledDiv = styled.div`
  height: 100vh;
  width:100vw;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledDivBlue = styled(StyledDiv)`
  background:  url(${blueBackground});
  background-size: cover;
`;

export const StyledDivWhite = styled(StyledDiv)`
  background:  url(${Sports});
  background-position: -10px 0rem; 
  background-repeat: no-repeat;
  background-size: 71vh;
  
  @media(max-width: 992px){
    background-position: -10px 19.5rem;
    background-size: 50vh;
  }
  
  @media(max-width: 762px){
    background-position: -10px 30rem;
    background-size: 50vh;
  }
  
  @media (max-width: 576px){
    background-size: 45vh;
    background-position: -15px 19.5rem;
  }
`;

export const StyledDivOrange = styled(StyledDiv)`
  background:  url(${orangeBackground});
  background-size: cover;
`;

export const StyledDivYellow = styled(StyledDiv)`
  background:  url(${yellowBackground});
  background-size: cover;
`;

export const StyledDivBG = styled(StyledDiv)`
  background: url(${IntroBG});
  background-size: cover;
  background-position: center;
`;

function App () {
  return (
      <StyledContainer fluid>
        <StyledDivBG><Introduction/></StyledDivBG>
        <StyledDivOrange>
          <Tagline />
        </StyledDivOrange>
        <StyledDivYellow><Features /></StyledDivYellow>
        <StyledDivBlue><Story /></StyledDivBlue>
        <StyledDiv><ComingSoon /></StyledDiv>
        <StyledDivWhite><Footer /></StyledDivWhite>
      </StyledContainer>
  )
}

export default App
