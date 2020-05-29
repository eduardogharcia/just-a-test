import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`
export const Column = styled.div`
  margin-bottom: 30px;
  > * {
    margin: 0 15px;
  }
  @media(min-width: 700px) {
    flex: 33.333% 0 0;
  }
`