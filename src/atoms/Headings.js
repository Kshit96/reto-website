import styled from "styled-components";
import React from "react";

const StyledP = styled.p`
font-family: gilroy-bold;
font-size: 5rem;
color: #f5f0e1;
`;


export const CenterHeading = props =>{
  return(
      <StyledP>{props.message}</StyledP>
  )
};
