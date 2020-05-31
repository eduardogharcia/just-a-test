import styled from 'styled-components'
import breakpoints from './../../styles/Breakpoints'

export const Container = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  padding-top: 100px;
`

export const Header = styled.header`
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  padding: 20px;
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  min-height: 100px;
  z-index: 50;
`

export const LogoArea = styled.div`
  flex: 80px 0 0;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(min-width: ${breakpoints.md}){
    flex: 250px 0 0;
  }
`

export const SearchCitiesArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  > div {
    flex: 1;
  }
`

export const Main = styled.main`
  position: relative;
`

export const Sidebar = styled.div`
  position: fixed;
  width: 250px;
  left: -250px;
  min-height: 100vh;
  padding: 20px;
  @media(min-width: ${breakpoints.md}){
    left: 0;
  }
`

export const Content = styled.div`
  padding: 20px;
  padding-left: 0;
  @media(min-width: ${breakpoints.md}){
    margin-left: 250px;
    padding-left: 20px;
  }
`

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`