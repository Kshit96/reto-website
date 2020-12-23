import styled, { keyframes } from 'styled-components'
import { ReactComponent as Challenge } from '../images/Challenge.svg'

const draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const drawAndFade = keyframes`
  0% {
    stroke-dashoffset: 100;
  }
  50%{
    stroke-dashoffset: 0;
  }
  100%{
    stroke-dashoffset: -100;
  }
`;

export const StyledChallenge = styled(Challenge)`
  width: 30%;
  
  .base{
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation: ${draw} 0.5s linear forwards;
  }
  
  .mountain{
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
    animation: ${draw} 1s linear forwards;
  }
  
  .flag{
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
    animation: ${draw} 1s linear 1s forwards;
  }
  
  .flash{
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: ${drawAndFade} 0.2s linear 1.5s forwards;
  }
`;
