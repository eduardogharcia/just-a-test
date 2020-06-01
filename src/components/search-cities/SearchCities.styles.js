import styled, { keyframes } from 'styled-components'
import breakpoints from './../../styles/Breakpoints'

export const Form = styled.form`
  display: flex;
  width: 100%;
  position: relative;
`

export const InputArea = styled.div`
  flex: 1;
  position: relative;
  > input{
    display: block;
    width: calc(100% - 15px);
    height: 50px;
    margin-right: 15px;
    padding-left: 40px;
    border: 1px solid #c3c3c3;
    &:focus{
      outline-color: #b72f32
    }
  }
`

export const Button = styled.button`
  background-color: #39b54a;
  color: #fff;
  font-weight: 600;
  border: none;
  display: block;
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  text-transform: uppercase;
  @media(min-width: ${breakpoints.md}){
    padding: 0 20px;
    flex: 200px 0 0;
  }
`

export const SearchResults = styled.ul`
  position: absolute;
  left: 0;
  top: 50px;
  width: calc(100% - 15px);
  background: #fff;
  padding: 20px 0;
  margin: 0;
  list-style: none;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  max-height: 400px;
  overflow: overlay;
  li {
    list-style: none;
    font-weight: 300;
    color: #484848;
    font-size: 1.222em;
    margin-bottom: 10px;
    padding: 0 20px;
    cursor: pointer;
    a{
      color: #484848;
      display: block;
    }
    p{
      display: block;
      margin: 2px 0;
    }
    span{
      display: block;
      margin: 2px 0;
      color: #767676;
      font-size: 0.888rem;
    }
    &:hover{
      background: rgba(0,0,0, 0.1)
    }
  }
  @media(min-width: ${breakpoints.md}){
    
  }
`
export const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const IconContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 0;
  width: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  svg {
    width: 20px;
    height: 40px;
    display: inline-block;
    > * {
      fill: #767676;
    }
  }
  &.isLoading{
    svg {
      animation: ${rotateAnimation} 2s linear infinite;
    }
  }
`
