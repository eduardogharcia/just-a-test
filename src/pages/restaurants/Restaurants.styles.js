import styled from 'styled-components'
export const Container = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  padding-top: 100px;
`
export const Header = styled.header`
  background-color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  min-height: 100px;
`
export const LogoArea = styled.div`
  flex: 250px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
`
export const Sidebar = styled.div`
  flex: 250px 0 0;
  padding: 20px;
`
export const Content = styled.div`
  padding: 20px;
  flex: 1 0 0;
`