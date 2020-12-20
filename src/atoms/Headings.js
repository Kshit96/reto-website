import styled from "styled-components";
import React from "react";

const StyledPWhite = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 5rem;
color: #f5f0e1;
text-align: center;
`;

const StyledPBlue = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 5rem;
color: #1e3d59;
text-align: center;
`;

const StyledPOrange = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 5rem;
color: #ff6e40;
text-align: center;
`;

const StyledPYellow = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 5rem;
color: #ffc13b;
text-align: center;
`;


export const CenterHeadingWhite = props =>{
  return(
      <StyledPWhite>{props.text}</StyledPWhite>
  )
};

export const CenterHeadingBlue = props =>{
  return(
      <StyledPBlue>{props.text}</StyledPBlue>
  )
};

export const CenterHeadingOrange = props =>{
  return(
      <StyledPOrange>{props.text}</StyledPOrange>
  )
};

export const CenterHeadingYellow = props =>{
  return(
      <StyledPYellow>{props.text}</StyledPYellow>
  )
};


