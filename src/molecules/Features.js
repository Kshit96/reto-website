import React from 'react'
import styled from 'styled-components'
import {Col, Container, Image, Row} from 'react-bootstrap'
import { StyledDivWhite } from '../atoms/Containers'
import {
  CenterHeadingBlue,
  CenterHeadingOrange,
  CenterTextBlue
} from '../atoms/Headings'
import {
  StyledCenterColHorizontal,
  StyledCenterColVertical
} from '../atoms/RowsAndCols'


const StyledRow = styled(Row)`
  scroll-snap-type: x mandatory;
  overflow: auto;
  height: 100vh;
  width: 100vw;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

const StyledImage = styled(Image)`
  padding: 5rem 5rem 5rem 5rem;
`

const featureContainer = (text, image) => {
  return (
      <Col xs={12}>
          <Row>
            <StyledCenterColHorizontal xs={{span:4, offset: 1}}>
              <StyledImage src={image} fluid/>
            </StyledCenterColHorizontal>
            <StyledCenterColVertical xs={6}>
              <CenterHeadingOrange text={text.substr(0, 1)}/>
              <CenterHeadingBlue text={text.substr(1, text.length - 1)}/>
              <CenterTextBlue text={'Tired of playing with the same group of friends or looking for new people to compete with? We dare you to CHALLENGE!'}/>
            </StyledCenterColVertical>
          </Row>
      </Col>
  )
}

const Features = (props) => (
    <StyledRow className="mx-0 px-0 my-0 py-0" fluid>
      {featureContainer('challenge', '/images/Mockuppng.png')}
      {featureContainer('personal profile')}
      {featureContainer('scoring')}
      {featureContainer('wall')}
      {featureContainer('feed')}
      {featureContainer('tournament')}
    </StyledRow>
)

export default Features
