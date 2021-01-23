import React from 'react'
import styled from "styled-components";
import {Col, Container, Image} from "react-bootstrap";
import {StyledCenterRow} from "../atoms/RowsAndCols";
import logo from "../assets/r3to.png";

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
