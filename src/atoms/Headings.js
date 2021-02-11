import styled from 'styled-components'
import React from 'react'

const StyledPWhite = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 3vw;
color: #f5f0e1;
text-align: center;
width: auto;

@media (max-width: 992px){
   font-size: 3vw;
}
`;

const StyledPYellow = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 3vw;
color: #ffc13b;
text-align: center;
width: auto;

@media (max-width: 992px){
   font-size: 3vw;
}
`;

const StyledPBlueTitle = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 3rem;
color: #245874;
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

export const CenterTitleBlue = props => {
  return (
      <StyledPBlueTitle>{props.text}</StyledPBlueTitle>
  )
};

export const CenterHeadingYellow = props => {
  return (
      <StyledPYellow>{props.text}</StyledPYellow>
  )
};

export const LeftTextBlue = props => {
  return (
      <StyledPBlueText>{props.text}</StyledPBlueText>
  )
};

export const LeftTextWhite = props => {
  return (
      <StyledPWhiteText>{props.text}</StyledPWhiteText>
  )
};
