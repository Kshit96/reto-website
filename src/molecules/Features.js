import React, {useState} from 'react'
import styled from 'styled-components'
import {Col, Container, Image, Row} from 'react-bootstrap'
import {
  CenterHeadingBlue,
  CenterHeadingOrange,
  LeftTextBlue
} from '../atoms/Headings'
import Slider from "react-slick";

export const StyledCenterColHorizontal = styled(Col)`
display: flex; 
flex-direction: row;
justify-content: center;
align-items:center;
`

const StyledImage = styled(Image)`
  padding: 5rem 5rem 5rem 5rem;
`;

const StyledCol = styled(Col)`
display: flex;
flex-direction: row;
`;

const featureContainer = (title, image, text) => {
  return (
      <div>
        <Col xs={12}>
          <Row>
            <StyledCenterColHorizontal xs={{span: 4, offset: 2}}>
              <StyledImage src={image} fluid/>
            </StyledCenterColHorizontal>
            <Col style={{display: 'flex', alignItems: 'center'}} xs={6}>
              <Row>
                <StyledCol xs={12}>
                  <CenterHeadingOrange text={title.substr(0, 1)}/>
                  <CenterHeadingBlue text={title.substr(1, text.length - 1)}/>
                </StyledCol>
                <StyledCol xs={8}>
                  <LeftTextBlue text={text}/>
                </StyledCol>
              </Row>
            </Col>
          </Row>
        </Col>
      </div>
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
          slidesToShow: 3,
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
      <Container className={'features-section mt-5 anchor'} id={'features'}
                 fluid>
        <Slider className={'slider-features mx-auto'} {...settings}>
          {featureContainer('challenge', '/images/Mockuppng.png',
              'Tired of playing with the same group of friends or looking for new people to compete with? We dare you to CHALLENGE!')}
          {featureContainer('personal profile', '/images/Mockuppng.png',
              'We know its difficult to keep a track of your wonderful performances. Dont worry, we got you covered.')}
          {featureContainer('scoring', '/images/Mockuppng.png',
              'Move away from counting your score in your mind or on boards. Maintain a Digital score and enjoy your game.')}
          {featureContainer('wall', '/images/Mockuppng.png',
              'An exlusive space for your Sports shaningans. Like, post or share in our private space.')}
          {featureContainer('feed', '/images/Mockuppng.png',
              'Tired of using multiple apps to keep yourself updated? Use our news feed for all national and international Sports news.')}
          {featureContainer('tournament', '/images/Mockuppng.png',
              'We tell you about all the tournaments happening around you. What are you waiting for? participate and share your stories with us.')}
        </Slider>
      </Container>
  )

}

export default Features

