import React from 'react'
import { CenterHeadingWhite } from '../atoms/Headings'
import { StyledCenterRow } from '../atoms/RowsAndCols'

export const Tagline = props => {
  return (
      <StyledCenterRow>
        <CenterHeadingWhite text={'you\'re the game'} />
      </StyledCenterRow>
  )
}
