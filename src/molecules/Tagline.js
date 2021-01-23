import React from 'react'
import { CenterHeadingWhite } from '../atoms/Headings'
import { StyledCenterRow } from '../atoms/RowsAndCols'

export const Tagline = props => {
  return (
      <StyledCenterRow>
        <CenterHeadingWhite text={'You\'re the game'} />
      </StyledCenterRow>
  )
}

export default Tagline
