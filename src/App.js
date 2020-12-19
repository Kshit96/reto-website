import React from 'react';
import {ReactComponent as Background} from './assets/image.svg';
import './App.css';
import {Container} from "react-bootstrap";
import {
  StyledDivBlue,
  StyledDivOrange,
  StyledDivWhite, StyledDivYellow
} from "./atoms/Containers";
import styled from "styled-components";

const StyledContainer = styled(Container)`
scroll-snap-type: y mandatory;
  overflow: auto;
  height: 100vh;
  width: 100vw;
`

function App() {
  return (
      <StyledContainer className={'mx-0 px-0 my-0 py-0'} fluid>
        <StyledDivBlue><TagLine/></StyledDivBlue>
        <StyledDivWhite>b</StyledDivWhite>
        <StyledDivOrange>c</StyledDivOrange>
        <StyledDivYellow>d</StyledDivYellow>
      </StyledContainer>
  );
}

export default App;
