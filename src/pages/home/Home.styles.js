import styled from 'styled-components'
import img from './../../assets/bg.jpg';
import breakpoints from './../../styles/Breakpoints'

export const Container = styled.div`
  background-color: #18130f;
  background-image: url(${img});
  background-size: cover;
  min-height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContentWrapper = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`
export const LogoWrapper = styled.div`
  position: absolute;
  top: 50px;
`
export const Title = styled.h2`
  font-size: 2em;
  line-height: 1em;
  color: #fff;
  font-weight: 800;
  @media(min-width: ${breakpoints.md}){
    font-size: 3.333em;
  }
`