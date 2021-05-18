import React from 'react'
import styled from 'styled-components'
import {Col, Container, Image, Row} from 'react-bootstrap'
import Slider from "react-slick";
import challenge from "../assets/noun_challenge_1560035.svg"
import feed from "../assets/noun_Feed_3141723.svg"
import post from "../assets/noun_news_2206757.svg"
import profile from "../assets/noun_profile_3671626.svg"
import scoreboard from "../assets/noun_scoreboard_1975588.svg"
import tournament from "../assets/noun_tournament_2415955.svg"

const StyledPBlue = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 3rem;
color: #1E3D59;
text-align: center;
width: auto;

@media (max-width: 992px){
   font-size: 3rem;
}
`;

const StyledPOrange = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 3rem;
color: #ff6e40;
text-align: center;
width: auto;

@media (max-width: 992px){
   font-size: 3rem;
}
`;

const StyledPBlueText = styled.p`
font-family: Gilroy;
font-weight: normal;
font-size: 1.5rem;
color: #245874;
width: auto;

  @media (max-width: 992px){
   text-align: center;
   font-size: 1rem;
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
  width:80vw;
  .slick-track{
  display:flex;
  align-items: center;
  }
  
  @media (max-width: 992px){
   width:95vw;
}
`;

const StyledRow = styled(Row)`
display: flex !important;
flex-direction: row;
padding-bottom: 4rem;
;`;

const CenterCol = styled(Col)`
  display: flex;
  align-items: center;
  
  @media (max-width: 992px){
   justify-content: center;
  }
`;

const StyledImage = styled(Image)`
  width:90%;
  self-align: center;
  
  @media (max-width: 992px){
   height: 60%;
   margin-bottom: 8vw;
  }
`

const featureContainer = (title, image, text) => {
  return (
      <StyledRow>
        <CenterCol xs={{span: 12}} lg={{span: 3, offset:2}}>
          <StyledImage src={image}/>
        </CenterCol>
        <CenterCol xs={{span: 12}} lg={{span: 5, offset: 1}}>
          <Row>
            <StyledCol xs={12}>
              <StyledPOrange>{title.substr(0, 1)}</StyledPOrange>
              <StyledPBlue>{title.substr(1, text.length - 1)}</StyledPBlue>
            </StyledCol>
            <StyledCol xs={{span:12}} lg={{span:12, offset:0}}>
              <StyledPBlueText>{text}</StyledPBlueText>
            </StyledCol>
          </Row>
        </CenterCol>
      </StyledRow>
  )
}

const Features = () => {

  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots show-dots",
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 500,
    pauseOnDotsHover: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '1rem'
        },
      },
    ],
  };

  return (
      <StyledContainer className={'features-section mt-5 anchor'}>
        <Slider className={'slider-features mx-auto'} {...settings}>
          {featureContainer('challenge', challenge,
              'Tired of playing with the same group of friends or looking for new people to compete with? We dare you to CHALLENGE!')}
          {featureContainer('profile', profile,
              'We know it\'s difficult to keep  track of your wonderful performances. Don\'t worry, we got you covered.')}
          {featureContainer('scoring', scoreboard,
              'Move away from counting your score in your mind or on boards. Maintain a digital score and enjoy your game.')}
          {featureContainer('wall', post,
              'An exclusive space for your sports shenanigans. Like, post or share in your private space.')}
          {featureContainer('feed', feed,
              'Tired of using multiple apps to keep yourself updated? Use our news feed for all national and international sports news.')}
          {featureContainer('tournament', tournament,
              'We tell you about all the tournaments happening around you. What are you waiting for? Participate and share your stories with us.')}
        </Slider>
      </StyledContainer>
  )

}

export default Features

