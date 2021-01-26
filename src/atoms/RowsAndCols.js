import styled from 'styled-components'
import {Col, Row} from 'react-bootstrap'

export const StyledCenterRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledCenterColHorizontal = styled(Col)`
display: flex; 
flex-direction: row;
justify-content: center;
align-items:center;
`

export const WideRow = styled(Row)`
width: 100%;
`

export const WideCol = styled(Col)`
width: 100%;
`

export const StyledCenterColVertical = styled(Col)`
display: flex; 
flex-direction: column;
justify-content: center;
align-items:center;
`
