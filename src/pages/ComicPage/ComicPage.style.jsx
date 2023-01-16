import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const FullScreen = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 99;
    overflow: hidden;
    background: rgba(51,51,51,0.6);
    backdrop-filter: blur(6px);
    transition: all 0.3s ease-in;
    animation: 0.4s ${fadeIn} ease-in;
`

export { FullScreen }