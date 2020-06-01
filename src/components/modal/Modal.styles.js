import styled from 'styled-components'
// import breakpoints from './../../styles/Breakpoints'

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  max-width: 200px;
  background-color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 5px;
`

export const Fade = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4)
`

export const CloseButton = styled.button`
  position: absolute;
  right: -10px;
  top: -10px;
  width: 30px;
  height: 30px;
  border: none;
  background-color: #fff;
  box-shadow: 0 0 6px rgba(0,0,0,0.2);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    width: 15px;
  }
  svg > * {
    fill: #000;
  }
`