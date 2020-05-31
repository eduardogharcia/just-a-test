import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  padding: 20px;
`
export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  legend {
    text-transform: uppercase;
    font-weight: 300;
    color: #a5a5a5;
    font-size: 1em;
    margin-bottom: 10px;
  }
  label{
    display: block;
    color: #484848;
    font-weight: 300;
    margin-bottom: 5px;
    cursor: pointer;
    span{
      margin-left: 10px;
    }
    svg {
      max-width: 18px;
    }
  }
`