import React, {useState} from 'react'
import styled from 'styled-components'
import {Col, Container, Image, Row} from 'react-bootstrap'
import {
  LeftTextBlue
} from '../atoms/Headings'
import Slider from "react-slick";
import challenge from "../assets/noun_challenge_1560035.svg"
import feed from "../assets/noun_Feed_3141723.svg"
import post from "../assets/noun_post_1033492.svg"
import profile from "../assets/noun_profile_3671626.svg"
import scoreboard from "../assets/noun_scoreboard_1975588.svg"
import tournament from "../assets/noun_tournament_2415955.svg"

const StyledPBlue = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 5vw;
color: #1E3D59;
text-align: center;
width: auto;

@media (max-width: 992px){
   font-size: 8vw;
}
`;

const StyledPOrange = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 5vw;
color: #ff6e40;
text-align: center;
width: auto;

@media (max-width: 992px){
   font-size: 8vw;
}
`;

const StyledCol = styled(Col)`
  display: flex;
  flex-direction: row;

  @media (max-width: 992px){
   justify-content: center;
   align-items: center;
  }
  
`;

const StyledContainer = styled(Container)`
  max-width:95vw;
  
  .slick-track{
  display:flex;
  align-items: center;
  }
`;

const StyledRow = styled(Row)`
display: flex !important;
flex-direction: row;
;`;

const CenterCol = styled(Col)`
  display: flex;
  align-items: center;
  
  @media (max-width: 992px){
   justify-content: center;
  }
`;

const StyledPBlueText = styled.p`
font-family: Gilroy;
font-weight: normal;
font-size: 2vw;
color: #245874;
width: auto;

  @media (max-width: 992px){
   text-align: center;
  }

`;

const StyledImage = styled(Image)`
  width:80%;
  self-align: center;
  
  @media (max-width: 992px){
   width: 40%;
   margin-bottom: 8vw;
  }
`

const featureContainer = (title, image, text) => {
  return (
      <StyledRow>
        <CenterCol xs={{span: 12}} lg={{span: 4, offset: 1}}>
          <StyledImage src={image}/>
        </CenterCol>
        <CenterCol xs={{span: 12}} lg={{span: 6, offset: 1}}>
          <Row>
            <StyledCol xs={12}>
              <StyledPOrange>{title.substr(0, 1)}</StyledPOrange>
              <StyledPBlue>{title.substr(1, text.length - 1)}</StyledPBlue>
            </StyledCol>
            <StyledCol xs={{span:8, offset:2}} lg={{span:10, offset:0}}>
              <StyledPBlueText>{text}</StyledPBlueText>
            </StyledCol>
          </Row>
        </CenterCol>
      </StyledRow>
  )
}

const Features = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots show-dots",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  };

  return (
      <StyledContainer className={'features-section mt-5 anchor'}>
        <Slider className={'slider-features mx-auto'} {...settings}>
          {featureContainer('challenge', challenge,
              'Tired of playing with the same group of friends or looking for new people to compete with? We dare you to CHALLENGE!')}
          {featureContainer('personal profile', profile,
              'We know its difficult to keep a track of your wonderful performances. Dont worry, we got you covered.')}
          {featureContainer('scoring', scoreboard,
              'Move away from counting your score in your mind or on boards. Maintain a Digital score and enjoy your game.')}
          {featureContainer('wall', post,
              'An exlusive space for your Sports shaningans. Like, post or share in our private space.')}
          {featureContainer('feed', feed,
              'Tired of using multiple apps to keep yourself updated? Use our news feed for all national and international Sports news.')}
          {featureContainer('tournament', tournament,
              'We tell you about all the tournaments happening around you. What are you waiting for? participate and share your stories with us.')}
        </Slider>
      </StyledContainer>
  )

}

export default Features

