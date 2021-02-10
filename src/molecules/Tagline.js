import React from 'react'
import { CenterHeadingWhite } from '../atoms/Headings'
import styled from "styled-components";
import {Row} from "react-bootstrap";

export const StyledCenterRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Tagline = props => {
  return (
      <StyledCenterRow>
        <CenterHeadingWhite text={'You\'re the game'} />
      </StyledCenterRow>
  )
}

export default Tagline
