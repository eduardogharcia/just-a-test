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
  Title,
  LoadingWrapper,
  ToggleMobileFilters
} from './Restaurants.styles'
import {
  getPageTitle,
  getCuisinesGroupedToFilters,
  applyFilters
} from './helper-functions'
import { Row, Column } from './../../styles/Grid.styles'
import Logo from './../../components/logo/Logo'
import SearchCities from './../../components/search-cities/SearchCities'
import Filters from './../../components/filters/Filters'
import FiltersPlaceholders from './../../components/filters/FiltersPlaceholder'
import Restaurant from './../../components/restaurant/Restaurant'
import { restaurantsByCityId } from './../../services/api'
import LoadSpinner from './../../components/load-spinner/LoadSpinner'
import TimesIcon from './../../components/icons/TimesIcon'
import FilterIcon from './../../components/icons/FilterIcon'

function Restaurants({ modal = () => {}}) {
  const { cityId } = useParams()
  const [prevCityId, setPrevCityId] = useState(null)
  const [isLoadingRestaurants, setIsLoadingRestaurants] = useState(true)
  const [title, seTtitle] = useState('')
  const [restaurants, setRestaurants] = useState(true)
  const [restaurantsToShow, setRestaurantsToShow] = useState(true)
  const [filterOptions, setFilterOptions] = useState(null)
  const [cuisines, setCuisines] = useState([])
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    if (prevCityId === cityId ) return

    setFilterOptions(null)
    async function load () {
      setIsLoadingRestaurants(true)
      try {
        const restaurants = await restaurantsByCityId(cityId)
        setRestaurants(restaurants)
        seTtitle(getPageTitle(restaurants))
        setCuisines(getCuisinesGroupedToFilters(restaurants))
        setPrevCityId(cityId)
      } catch (error) {
        modal('Ocorreu um problema ao conectar com o servidor')
      } finally {
        setIsLoadingRestaurants(false)
      }

    }
    load()
  }, [cityId, prevCityId, modal])

  useEffect(() => {
    setRestaurantsToShow(applyFilters(restaurants, filterOptions))
  }, [restaurants, filterOptions])

  function handleChangeFilter (filterOptions) {
    setFilterOptions(filterOptions)
  }

  function handleToggleMobileFilters () {
    setShowSidebar(!showSidebar)
  }

  return (
    <Container>
      <Header>
        <LogoArea>
          <Link to={`/`}>
            <Logo />
          </Link>
        </LogoArea>
        <SearchCitiesArea>
          <SearchCities modal={modal} />
        </SearchCitiesArea>
      </Header>
      <Main>
        <Sidebar className="sidebar" toggle={showSidebar}>
          {
            !isLoadingRestaurants ?
            <Filters cuisines={cuisines} change={handleChangeFilter} /> :
            <FiltersPlaceholders />
          }
          <ToggleMobileFilters onClick={handleToggleMobileFilters}>
            <TimesIcon />
          </ToggleMobileFilters>
        </Sidebar>
        <Content>
          <ToggleMobileFilters className="open-filter" onClick={handleToggleMobileFilters}>
            <FilterIcon />
          </ToggleMobileFilters>
          {
            !isLoadingRestaurants ?
            <>
              <Title>Restaurantes em {title}</Title>
              <Row className="result-area">
                {
                  restaurantsToShow.map((restaurant) => {
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
