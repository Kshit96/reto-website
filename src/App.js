import React from 'react';
import './App.css';
import {Container} from "react-bootstrap";
import {
  StyledDivBlue,
  StyledDivOrange,
  StyledDivWhite, StyledDivYellow
} from "./atoms/Containers";
import styled from "styled-components";
import {Tagline} from "./molecules/Tagline";

const StyledContainer = styled(Container)`
scroll-snap-type: y mandatory;
  overflow: auto;
  height: 100vh;
  width: 100vw;
`

function App() {
  return (
      <StyledContainer className={'mx-0 px-0 my-0 py-0'} fluid>
        <StyledDivBlue>
          <Tagline />
        </StyledDivBlue>
        <StyledDivWhite>b</StyledDivWhite>
        <StyledDivOrange>c</StyledDivOrange>
        <StyledDivYellow>d</StyledDivYellow>
      </StyledContainer>
  );
}

export default App;
