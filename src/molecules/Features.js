import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import { StyledDivWhite } from '../atoms/Containers';
import { CenterHeadingBlue, CenterHeadingOrange } from '../atoms/Headings';

const StyledRow = styled(Row)`
  scroll-snap-type: x mandatory;
  overflow: auto;
  height: 100vh;
  width: 100vw;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const featureContainer = (text) => {
  return (
    <Col xs={12}>
      <StyledDivWhite>
        <CenterHeadingOrange text={text.substr(0, 1)} />
          <CenterHeadingBlue text={text.substr(1, text.length - 1)} />
        </StyledDivWhite>
      </Col>
  )
}

const Features = (props) => (
  <StyledRow className="mx-0 px-0 my-0 py-0" fluid>
    {featureContainer('Challenge')}
    {featureContainer('Personal Profile')}
    {featureContainer('Scoring')}
    {featureContainer('Wall')}
    {featureContainer('Feed')}
    {featureContainer('Tournament')}
  </StyledRow>
);

export default Features
