import React from 'react'
import { CenterHeadingWhite } from '../atoms/Headings'
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";

export const StyledCenterRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
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
font-size: 5vw;
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

export const StyledCenterColVertical = styled(Col)`
display: flex; 
flex-direction: column;
justify-content: center;
align-items:center;
`;


export const Tagline = props => {
  return (
      <StyledContainer fluid>
        <StyledCenterRow>
          <StyledCenterColVertical className={'mt-5'} lg={{span: 12}} xs={8}>
            <StyledPWhite><b>VISION</b></StyledPWhite>
          </StyledCenterColVertical>
          <StyledCenterColVertical lg={12} xs={8}>
            <StyledPWhiteText>To create a space for Athletes and Organisations that enables Social, Professional & Sustainable growth across all sports</StyledPWhiteText>
          </StyledCenterColVertical>
          <StyledCenterColVertical className={'mt-5'} lg={{span: 12}} xs={8}>
            <StyledPWhite><b>MISSION</b></StyledPWhite>
          </StyledCenterColVertical>
          <StyledCenterColVertical lg={{span: 12}} xs={8}>
            <StyledPWhiteText>To build a Tech-One platform across all sporting realms</StyledPWhiteText>
          </StyledCenterColVertical>
        </StyledCenterRow>
      </StyledContainer>
  )
}

export default Tagline
