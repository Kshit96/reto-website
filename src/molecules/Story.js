import {Container} from "react-bootstrap";
import React from 'react'
import {
  StyledCenterColHorizontal,
  StyledCenterColVertical,
  StyledCenterRow
} from "../atoms/RowsAndCols";
import {CenterHeadingWhite, LeftTextWhite} from "../atoms/Headings";


export const Story = () => {
  return(
      <Container>
        <StyledCenterRow>
          <StyledCenterColHorizontal xs={{span: 3, offset: 1}} style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
            <CenterHeadingWhite text={"R3TO"}/>
            <div style={{marginTop: '-2rem'}}>
              <LeftTextWhite text={'the story'} />
            </div>
          </StyledCenterColHorizontal>
          <StyledCenterColVertical xs={8}>
            <LeftTextWhite text={`Visibility and recognition play a pivotal role 
            in the life of any athlete. The need for a digital platform to foster a 
            sports community has been often overlooked, not only by an individual but 
            also by sports authorities.`} />
            <LeftTextWhite text={`In our diverse geography the true challenge 
            lies in spotting the right talent and giving them an opportunity to 
            showcase their potential. We feel that sports enthusiasts of not only 
            our country but the entire world deserve a special platform that provides 
            the required support to help them navigate to a successful sports career.`} />
            <LeftTextWhite text={`Today life is full of stress, anxiety, and 
            constant challenges. Hence, we thought of building R3TO, a super app 
            that brings together people from diverse sports backgrounds into one 
            place to give you a place to connect, challenge, build connections and 
            grow together.`} />
            <LeftTextWhite text={`If you’re here that means you have taken the 
            first step in the right direction and are ready to explore a vast 
            community of like-minded individuals and opportunities. We welcome 
            you to the world of R3TO and hope to be a part of your sports journey.`} />
          </StyledCenterColVertical>
        </StyledCenterRow>
      </Container>
  )
}

export default Story;
