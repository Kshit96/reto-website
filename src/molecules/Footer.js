import React, {useState} from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Image
} from "react-bootstrap";
import {
  StyledCenterColHorizontal,
  StyledCenterColVertical,
  StyledCenterRow, WideCol, WideRow
} from "../atoms/RowsAndCols";
import styled from 'styled-components'
import {
  CenterHeadingBlue,
  CenterTitleBlue,
  LeftTextBlue
} from "../atoms/Headings";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";
import Instagram from "../assets/Instagram.svg";

const StyledContainer = styled(Container)`
font-family: gilroy;
font-weight: normal;
height: 85%;
padding-top: 6rem;
`;

const StyledImage = styled(Image)`
  height: 2rem;
  width: 2rem;
`

const StyledRow = styled(Row)`
background-color: #245874;
height: 15%;
width: 100%;
`

const StyledCol = styled(Col)`
display: flex;
justify-content: center;
align-items: center;
`

export const Footer = () => {

  const [formData, setFormData] = useState({});

  return (<>
        <StyledContainer>
          <Row className={'align-items-start'}>
            <Col xs={{span: 5}} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start'
            }}>
              <CenterTitleBlue text={"Up for a challenge?"}/>
              <div style={{marginTop: '-2rem'}}>
                <LeftTextBlue text={'Get in touch with us!'}/>
              </div>
            </Col>
            <StyledCenterColVertical xs={7}>
              <WideRow className={'mt-3'}>
                <WideCol xs={{span: 11, offset: 2}}>
                  <Form>
                    <InputGroup className="mb-3">
                      <Form.Control
                          style={{borderColor: "#245874", color: "#245874"}}
                          value={formData.name}
                          name={'name'}
                          type="text"
                          placeholder="Name*"
                          aria-label="Name"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Form.Control
                          style={{borderColor: "#245874", color: "#245874"}}
                          value={formData.email}
                          name={'email'}
                          type="email"
                          placeholder="Email*"
                          aria-label="Email"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Form.Control
                          style={{borderColor: "#245874", color: "#245874"}}
                          value={formData.query}
                          className={'text-area'}
                          name={'query'}
                          placeholder="Write to us, we'd love to hear from you..."
                          as="textarea"
                          aria-label="With textarea"
                          rows="10"/>
                    </InputGroup>
                  </Form>
                </WideCol>
                <Col xs={{span: 11, offset: 2}}>
                  <Button variant={'dark'} style={{
                    borderColor: "#245874",
                    backgroundColor: "#245874"
                  }}>Submit</Button>
                </Col>
              </WideRow>
            </StyledCenterColVertical>
          </Row>
        </StyledContainer>
        <StyledRow>
          <StyledCol xs={4}>
            <a href={'https://www.instagram.com/r3to.sports/'} target="_blank"><StyledImage src={Instagram} fluid/></a>
          </StyledCol>
          <StyledCol xs={4}>
            <a href={'https://www.facebook.com/R3TO-101096728529066'} target="_blank"><StyledImage src={Facebook} fluid/></a>
          </StyledCol>
          <StyledCol xs={4}>
            <a href={'https://twitter.com/R3TOsports'} target="_blank"><StyledImage src={Twitter} fluid/></a>
          </StyledCol>
        </StyledRow></>
  )
}
