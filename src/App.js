import React from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import {
  StyledDivBG, StyledDivBlue,
  StyledDivOrange, StyledDivWhite,
  StyledDivYellow
} from './atoms/Containers'
import styled from 'styled-components'
import Story from './molecules/Story'
import Features from './molecules/Features'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Footer} from "./molecules/Footer";
import Introduction from "./molecules/Introduction";
import Tagline from "./molecules/Tagline";

const StyledContainer = styled(Container)`
  scroll-snap-type: y mandatory;
  overflow: auto;
  height: 100vh;
  width: 100vw;
`
AOS.init();

function App () {
  return (
      <StyledContainer className={'mx-0 px-0 my-0 py-0'} fluid>
        <StyledDivBG><Introduction/></StyledDivBG>
        <StyledDivBlue>
          <Tagline />
        </StyledDivBlue>
        <StyledDivYellow><Features /></StyledDivYellow>
        <StyledDivOrange><Story /></StyledDivOrange>
        <StyledDivWhite><Footer /></StyledDivWhite>
      </StyledContainer>
  )
}

export default App
