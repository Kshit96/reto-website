import styled from 'styled-components'
import React from 'react'

const StyledPWhite = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 5rem;
color: #f5f0e1;
text-align: center;
width: auto;
`;

const StyledPBlue = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 5rem;
color: #1E3D59;
text-align: center;
width: auto;
`;

const StyledPBlueTitle = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 3rem;
color: #245874;
text-align: center;
width: auto;
`;

const StyledPOrange = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 5rem;
color: #ff6e40;
text-align: center;
width: auto;
`;

const StyledPYellow = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 5rem;
color: #ffc13b;
text-align: center;
width: auto;
`;

const StyledPBlueText = styled.p`
font-family: Gilroy;
font-weight: normal;
font-size: 1.4rem;
color: #245874;
width: auto;
`;

const StyledPWhiteText = styled.p`
font-family: Gilroy;
font-weight: normal;
font-size: 1.4rem;
color: white;
width: auto;
`;

export const CenterHeadingWhite = props => {
  return (
      <StyledPWhite>{props.text}</StyledPWhite>
  )
};

export const CenterHeadingBlue = props => {
  return (
      <StyledPBlue>{props.text}</StyledPBlue>
  )
};

export const CenterTitleBlue = props => {
  return (
      <StyledPBlueTitle>{props.text}</StyledPBlueTitle>
  )
};

export const CenterHeadingOrange = props => {
  return (
      <StyledPOrange>{props.text}</StyledPOrange>
  )
};

export const CenterHeadingYellow = props => {
  return (
      <StyledPYellow>{props.text}</StyledPYellow>
  )
};

export const LeftTextBlue = props =>{
  return(
      <StyledPBlueText>{props.text}</StyledPBlueText>
  )
};

export const LeftTextWhite = props =>{
  return(
      <StyledPWhiteText>{props.text}</StyledPWhiteText>
  )
};
