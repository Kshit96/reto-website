import React from 'react'
import { CenterHeadingWhite } from '../atoms/Headings'
import { Row } from 'react-bootstrap'
import styled from 'styled-components'

const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Tagline = props => {
  return (
      <StyledRow>
        <CenterHeadingWhite text={'you\'re the game'} />
      </StyledRow>

  )
}
