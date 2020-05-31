import styled, {keyframes} from 'styled-components'

export const pulseAnimation = keyframes`
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
`

export const LineLoading = styled.div`
  height: 15px;
  margin-bottom: 10px;
  animation: ${pulseAnimation} 1s infinite ease-in-out;
`
export const TitleLoading = styled(LineLoading)`
  height: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
`
