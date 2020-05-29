import styled from 'styled-components'

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
    padding-left: 20px;
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
  padding: 0 20px;
  flex: 200px 0 0;
  text-transform: uppercase;
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
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
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
`