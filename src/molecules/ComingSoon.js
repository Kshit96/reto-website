import {Col, Container, Image, Row} from "react-bootstrap";
import React from 'react'
import styled from "styled-components";
import Screens from "../assets/Screens.png"
import AppStore from "../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
import PlayStore from "../assets/google-play-badge.png"

const StyledContainer = styled(Container)`
 width: 80%;
`;

const StyledPBlueTitle = styled.p`
font-family: Gilroy;
font-size: 2rem;
color: #245874;
text-align: center;
width: auto;

@media (max-width: 992px){
   font-size: 5vw;
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

export const StyledCenterRowVertical = styled(Col)`
display: flex; 
flex-direction: column;
justify-content: center;
align-items:center;
`;

const StyledImage = styled(Image)`
  width:50%;
  self-align: center;
  padding: 1rem;
  
  @media (max-width: 992px){
   height: 60%;
   margin-bottom: 8vw;
  }
  
    @media (max-width: 768px){
   height: 60%;
   margin-bottom: 8vw;
  }
`

export const ComingSoon = () => {
  return(
      <StyledContainer fluid>
        <Row>
          <Col lg={7}>
            <Image src={Screens} fluid/>
          </Col>
          <StyledCenterCol lg={5}>
            <StyledCenterRowVertical>
              <Col>
                <StyledPBlueTitle>Coming Soon...</StyledPBlueTitle>
              </Col>
              <Col>
                <StyledImage style={{width: '47%'}} src={AppStore} fluid/>
                <StyledImage src={PlayStore} fluid/>
              </Col>
            </StyledCenterRowVertical>
          </StyledCenterCol>
        </Row>
      </StyledContainer>
  )
}

export default ComingSoon;
