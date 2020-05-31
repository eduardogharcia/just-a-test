import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'

import {
  Container,
  Header,
  LogoArea,
  SearchCitiesArea,
  Main,
  Sidebar,
  Content,
  LoadingWrapper
} from './Restaurants.styles'
import { Row, Column } from './../../styles/Grid.styles'
import Logo from './../../components/logo/Logo'
import SearchCities from './../../components/search-cities/SearchCities'
import Filter from './../../components/filter/Filter'
import Restaurant from './../../components/restaurant/Restaurant'
import { restaurantsByCityId } from './../../services/api'
import LoadSpinner from './../../components/load-spinner/LoadSpinner'

function Restaurants() {
  const { cityId } = useParams()
  const [isLoadingRestaurants, setIsLoadingRestaurants] = useState(true)
  const [title, seTtitle] = useState('')
  const [restaurants, setRestaurants] = useState(true)

  useEffect(() => {
    async function load () {
      setIsLoadingRestaurants(true)
      const restaurants = await restaurantsByCityId(cityId)
      setRestaurants(restaurants)

      seTtitle(
        restaurants
        .find(rest => {
          if (rest.location && rest.location.city) return true
          return false
        })
        .location.city
      )
      setIsLoadingRestaurants(false)
    }
    load()
  }, [cityId])

  return (
    <Container>
      <Header>
        <LogoArea>
          <Link to={`/`}>
            <Logo />
          </Link>
        </LogoArea>
        <SearchCitiesArea>
          <SearchCities />
        </SearchCitiesArea>
      </Header>
      <Main>
        <Sidebar>
          <Filter />
        </Sidebar>
        <Content>
          {
            !isLoadingRestaurants ?
            <>
              <h2>Restaurantes em {title}</h2>
              <Row>
                {
                  restaurants.map((restaurant) => {
                    return (
                      <Column key={restaurant.id} sm={6} lg={4} teste={'asdf'}>
                        <Restaurant {...restaurant} />
                      </Column>
                    )
                  })
                }
              </Row>
            </>
            : <LoadingWrapper><LoadSpinner /></LoadingWrapper>
          }
        </Content>
      </Main>
    </Container>
  );
}
export default Restaurants;
