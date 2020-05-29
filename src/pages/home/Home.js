import React from 'react';
import SearchCities from './../../components/search-cities/SearchCities'
import { Container, ContentWrapper, Title, LogoWrapper } from './Home.styles'
import Logo from './../../components/logo/Logo'

function Home() {
  return (
    <Container>
      <LogoWrapper>
        <Logo type="white"/>
      </LogoWrapper>
      <ContentWrapper>
        <Title>Descubra os melhores restaurantes em sua cidade</Title>
        <SearchCities />
      </ContentWrapper>
    </Container>
  );
}

export default Home;
