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
  WideCol, WideRow
} from "../atoms/RowsAndCols";
import styled from 'styled-components'
import {
  LeftTextBlue
} from "../atoms/Headings";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";
import Instagram from "../assets/Instagram.svg";
import emailjs from 'emailjs-com';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const StyledCenterColVertical = styled(Col)`
display: flex; 
flex-direction: column;
justify-content: center;
align-items:center;
`;

const StyledContainer = styled(Container)`
font-family: gilroy;
font-weight: normal;
height: 85%;
padding-top: 6rem;

  @media (max-width: 768px){
   height: 90%;
  }
`;

const StyledImage = styled(Image)`
  height: 2rem;
  width: 2rem;
  
  @media (max-width: 576px){
   height: 1.5rem;
  width: 1.5rem;
  }
`;

const StyledRow = styled(Row)`
background-color: #245874;
height: 15%;
width: 100%;
display: flex;
margin: 0px;
justify-content: center;
align-items: center;

  @media (max-width: 768px){
   height: 10%;
}

`;

const StyledCol = styled(Col)`
display: flex;
justify-content: center;
align-items: center;
`;

const CenterCol = styled(Col)`
@media (max-width: 992px){
display: flex;
justify-content: center;
align-items: center;
}
`;

const StyledPBlueTitle = styled.p`
font-family: Gilroy;
font-weight: bold;
font-size: 3vw;
color: #245874;
text-align: center;
width: auto;

@media (max-width: 992px){
   font-size: 5vw;
}

@media (max-width: 576px){
   font-size: 2rem;
}

`;

const StyledPBlueText = styled.p`
font-family: Gilroy;
font-weight: normal;
font-size: 1.5vw;
color: #245874;
text-align: center;
width: auto;

@media (max-width: 992px){
   font-size: 3vw;
}

@media (max-width: 576px){
   font-size: 1rem;
}
`;

const StyledP = styled.p`
  margin-top: -1.8rem;
  
  @media (max-width: 768px){
    margin-top: -1rem;
  }
`;

const StyledButton=styled(Button)`
  border-color: #245874;
  background-color: #245874;
`;

const StyledDiv = styled.div`
  
 width: 100%;
 height:100%; 

.Toastify__toast.Toastify__toast--dark {
 background-color: #245874 !important;
}
`;

const toastP=styled.p`
textAlign: center; 
width: 100%; 
padding: 0rem;
fontFamily: Gilroy;
`

export const Footer = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const toastMessage = () => {
    toast.info(<toastP>Thank you for your interest in R3TO! We have successfully noted your query.</toastP>, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const toastError = (message) => {
    toast.error(<toastP>{message}</toastP>, {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onClick = () => {

    const templateParams = {
      from_email: email,
      to_email: 'people@r3to.io',
      name: name,
      message: message
    }

    if(name.length===0 | message.length===0 | email.length===0){
      toastError('Please fill in all fields.');
      return;
    }

    emailjs.init('user_sFZIEi9xMxXho4jybllSs')
    emailjs.send("service_jdv3p5a","template_wxig08u", templateParams)
    .then(function() {
      toastMessage();
    }, function() {
      toastError('Uh Oh! There seems to be a problem at our end! Please reach out to us directly at people@r3to.io!')
    });
  };

  return (<StyledDiv>
        <StyledContainer fluid>
          <Row className={'align-items-start'}>
            <Col lg={{span: 4, offset: 1}} xs={12}>
              <StyledPBlueTitle>Up for a challenge?</StyledPBlueTitle>
              <StyledPBlueText><StyledP>Get in touch with
                us!</StyledP></StyledPBlueText>
            </Col>
            <StyledCenterColVertical lg={{span: 6}} xs={12}>
              <WideRow className={'mt-3'}>
                <WideCol lg={{span: 11, offset: 2}}>
                  <Form>
                    <InputGroup className="mb-3">
                      <Form.Control
                          style={{borderColor: "#245874", color: "#245874"}}
                          onChange={(e)=>setName(e.target.value)}
                          name={'name'}
                          type="text"
                          placeholder="Name*"
                          aria-label="Name"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Form.Control
                          style={{borderColor: "#245874", color: "#245874"}}
                          onChange={(e)=>setEmail(e.target.value)}
                          name={'email'}
                          type="email"
                          placeholder="Email*"
                          aria-label="Email"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Form.Control
                          style={{borderColor: "#245874", color: "#245874"}}
                          onChange={(e)=>setMessage(e.target.value)}
                          className={'text-area'}
                          name={'query'}
                          placeholder="Write to us, we'd love to hear from you..."
                          as="textarea"
                          aria-label="With textarea"
                          rows="10"/>
                    </InputGroup>
                  </Form>
                </WideCol>
                <CenterCol lg={{span: 11, offset: 2}}>
                  <StyledButton
                      onClick={onClick}
                  >Submit</StyledButton>
                </CenterCol>
              </WideRow>
            </StyledCenterColVertical>
          </Row>
        </StyledContainer>
        <StyledRow>
          <StyledCol xs={4}>
            <a href={'https://www.instagram.com/r3to.sports/'}
               target="_blank" rel="noopener noreferrer"><StyledImage src={Instagram} fluid/></a>
          </StyledCol>
          <StyledCol xs={4}>
            <a href={'https://www.facebook.com/R3TO-101096728529066'}
               target="_blank" rel="noopener noreferrer"><StyledImage src={Facebook} fluid/></a>
          </StyledCol>
          <StyledCol xs={4}>
            <a href={'https://twitter.com/R3TOsports'}
               target="_blank" rel="noopener noreferrer"><StyledImage src={Twitter} fluid/></a>
          </StyledCol>
        </StyledRow>
        <ToastContainer/></StyledDiv>
  )
}
