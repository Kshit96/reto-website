import styled from "styled-components";
import IntroBG from '../assets/IntroductionBackground.png'
import blueBackground from "../assets/blueBackground.svg"
import yellowBackground from "../assets/yellowBackground.svg"
import orangeBackground from "../assets/orangeBackground.svg"
import Sports from "../assets/sports.svg"

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
  width: 100vw;
  background:  url(${Sports});
  background-position: -10px 0px; 
  background-repeat: no-repeat;
  background-size: 71vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const StyledDivOrange = styled.div`
  height: 100vh;
  width:100vw;
  background:  url(${orangeBackground});
  background-size: cover;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledDivYellow = styled.div`
  height: 100vh;
  width:100vw;
  background:  url(${yellowBackground});
  background-size: cover;
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
  background-position: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
`
