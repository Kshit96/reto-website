import {Col, Container, Row} from "react-bootstrap";
import React from 'react'
import {CenterHeadingWhite, LeftTextWhite} from "../atoms/Headings";
import styled from "styled-components";


export const StyledCenterRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  MARGIN: 0rem;
`;

export const StyledCenterColHorizontal = styled(Col)`
display: flex; 
flex-direction: column;
align-items: start;

  @media (max-width: 992px){
   justify-content: center;
   align-items: center;
  }
`;

export const StyledCenterColVertical = styled(Col)`
display: flex; 
flex-direction: column;
justify-content: center;
align-items:center;
`;

const StyledPWhiteText = styled.p`
font-family: Gilroy;
font-weight: normal;
font-size: 1.5vw;
color: white;
width: auto;

  @media (max-width: 992px){
   text-align: center;
   font-size: 2vw;
  }
  
  @media (max-width: 576px){
   font-size: 0.7rem;
}
`;

const StyledPWhite = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 5vw;
color: white;
text-align: center;
width: auto;

@media (max-width: 992px){
   font-size: 6vw;
}

@media (max-width: 576px){
   font-size: 2rem;
}

`;

const StyledContainer = styled(Container)`
 width: 100%;
`;

const StyledP = styled.p`
  margin-top: -2rem;
  font-weight: bold;
  
  @media (max-width: 576px){
    margin-top: -1rem;
  }
`;


export const Story = () => {
  return(
      <StyledContainer fluid>
        <StyledCenterRow>
          <StyledCenterColHorizontal lg={{span: 2}} xs={8}>
            <StyledPWhite>R3TO</StyledPWhite>
            <StyledPWhiteText><StyledP>the story</StyledP></StyledPWhiteText>
          </StyledCenterColHorizontal>
          <StyledCenterColVertical lg={6} xs={8}>
            <StyledPWhiteText>Visibility and recognition play a pivotal role
            in the life of any athlete. The need for a digital platform to foster a
            sports community has been often overlooked, not only by an individual but
            also by sports authorities.</StyledPWhiteText>
            <StyledPWhiteText>In our diverse geography the true challenge
            lies in spotting the right talent and giving them an opportunity to
            showcase their potential. We feel that sports enthusiasts of not only
            our country but the entire world deserve a special platform that provides
            the required support to help them navigate to a successful sports career.</StyledPWhiteText>
            <StyledPWhiteText>Today life is full of stress, anxiety, and
            constant challenges. Hence, we thought of building R3TO, a super app
            that brings together people from diverse sports backgrounds into one
            place to give you a place to connect, challenge, build connections and
            grow together.</StyledPWhiteText>
            <StyledPWhiteText>If you’re here that means you have taken the
            first step in the right direction and are ready to explore a vast
            community of like-minded individuals and opportunities. We welcome
            you to the world of R3TO and hope to be a part of your sports journey.</StyledPWhiteText>
          </StyledCenterColVertical>
        </StyledCenterRow>
      </StyledContainer>
  )
}

export default Story;
