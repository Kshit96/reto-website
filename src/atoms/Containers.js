import styled from "styled-components";
import IntroBG from '../assets/IntroductionBackground.png'
import blueBackground from "../assets/blueBackground.svg"

export const StyledDivBlue = styled.div`
  height: 100vh;
  width:100vw;
  background:  url(${blueBackground});
  background-size: cover;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledDivWhite = styled.div`
  height: 100vh;
  width:100vw;
  background-color: #f5f0e1;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledDivOrange = styled.div`
  height: 100vh;
  width:100vw;
  background-color: #ff6e40;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledDivYellow = styled.div`
  height: 100vh;
  width:100vw;
  background-color: #ffc13b;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledDivBG = styled.div`
  height: 100vh;
  width:100vw;
  background: linear-gradient(rgba(0,0,0,.9), rgba(0,0,0,.9)), url(${IntroBG});
  background-size: cover;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
`
