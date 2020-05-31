import styled from 'styled-components'
import breakpoints from './Breakpoints'

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`
export const Column = styled.div`
  margin-bottom: 30px;
  flex: 100%;
  padding: 0 15px;
  @media only screen and (min-width: ${breakpoints.sm}) {
    ${({ sm }) => sm && getWidth(sm)}
  }
  @media only screen and (min-width: ${breakpoints.md}) {
    ${({ md }) => md && getWidth(md)}
  }
  @media only screen and (min-width: ${breakpoints.lg}) {
    ${({ lg }) => lg && getWidth(lg)}
  }
  @media only screen and (min-width: ${breakpoints.xl}) {
    ${({ xl }) => xl && getWidth(xl)}
  }
`

const getWidth = (columnSizeParts) => {
  if (!columnSizeParts) return
  const width = (columnSizeParts / 12) * 100
  return `
    flex: ${width}%;
    max-width: ${width}%;
    `
}