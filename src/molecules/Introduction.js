import React from 'react'
import styled from "styled-components";
import {Col, Container, Image, Row} from "react-bootstrap";
import logo from "../assets/r3to.png";

export const StyledCenterRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Introduction = props => {
  return (
      <Container>
        <StyledCenterRow>
          <Col xs={4}>
            <Image src={logo} fluid/>
          </Col>
        </StyledCenterRow>
      </Container>
  )
}

export default Introduction
