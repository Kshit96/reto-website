import React from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import {
  StyledDivBG,
  StyledDivBlue,
  StyledDivOrange,
  StyledDivWhite, StyledDivYellow
} from './atoms/Containers'
import styled from 'styled-components'
import Tagline from './molecules/Tagline'
import Features from './molecules/Features'
import Introduction from './molecules/Introduction'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        <StyledDivWhite><Features /></StyledDivWhite>
        <StyledDivOrange>c</StyledDivOrange>
        <StyledDivYellow>d</StyledDivYellow>
      </StyledContainer>
  )
}

export default App
