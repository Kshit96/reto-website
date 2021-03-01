import React from 'react'
import styled from "styled-components";
import {Col, Container, Image, Row} from "react-bootstrap";
import Vision from "../assets/noun_Vision_3367870.svg"
import Mission from "../assets/noun_Mission_1847079.svg"

export const StyledCenterRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  div.vision{
 background-image:url(${Vision})!important;
 background-repeat: no-repeat;
 background-size: 10rem 10rem;
 background-position: left;
 padding-left: 150px;
 margin-left: -150px;
}

div.mission{
background-image:url(${Mission})!important;
background-repeat: no-repeat;
background-size: 8rem 8rem;
overflow: visible;
background-position: left;
padding-bottom:50px;
margin-bottom:-50px;
padding-top:50px;
margin-top:-50px;
padding-left: 100px;
margin-left: -100px;
}
`

const StyledContainer = styled(Container)`
 width: 100%;
`;

const StyledPWhiteText = styled.p`
font-family: Gilroy;
font-weight: normal;
font-size: 1.5vw;
color: white;
width: auto;
text-align: center;
margin: 0rem;

  @media (max-width: 992px){
   text-align: center;
   font-size: 2vw;
  }
  
  @media (max-width: 576px){
   font-size: 1.4rem;
}
`;

const StyledPWhite = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 4vw;
color: white;
text-align: center;
width: auto;
margin: 0rem;

@media (max-width: 992px){
   font-size: 6vw;
}

@media (max-width: 576px){
   font-size: 2rem;
}
`;

export const StyledCenterCol = styled(Col)`
display: flex; 
flex-direction: row;
justify-content: center;
align-items:center;
}
`;


export const Tagline = props => {
  return (
      <StyledContainer fluid>
        <StyledCenterRow>
          <StyledCenterCol lg={{span: 8}} xs={8}>
            <StyledPWhite><b>OUR VISION</b></StyledPWhite>
          </StyledCenterCol>
          <StyledCenterCol className={'mb-5 vision'} lg={{span:6, offset:4}} xs={8}>
            <StyledPWhiteText ><i>"To create a space for Athletes and Organisations that enables Social, Professional & Sustainable growth across all sports"</i></StyledPWhiteText>
          </StyledCenterCol>
          <StyledCenterCol className={'mt-5 pt-5'} lg={{span: 8}} xs={8}>
            <StyledPWhite><b>THE MISSION</b></StyledPWhite>
          </StyledCenterCol>
          <StyledCenterCol className={'mission'} lg={{span:6, offset:4}} xs={8}>
            <StyledPWhiteText><i>"To build a Tech-One platform across all sporting realms"</i></StyledPWhiteText>
          </StyledCenterCol>
        </StyledCenterRow>
      </StyledContainer>
  )
}

export default Tagline
