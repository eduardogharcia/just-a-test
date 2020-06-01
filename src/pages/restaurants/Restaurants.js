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
  LoadingWrapper,
  ToggleMobileFilters
} from './Restaurants.styles'
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
  const [isLoadingRestaurants, setIsLoadingRestaurants] = useState(true)
  const [title, seTtitle] = useState('')
  const [restaurants, setRestaurants] = useState(true)
  const [restaurantsToShow, setRestaurantsToShow] = useState(true)
  const [filterOptions, setFilterOptions] = useState(null)
  const [cuisines, setCuisines] = useState([])
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    setFilterOptions(null)
    async function load () {
      setIsLoadingRestaurants(true)
      try {
        const restaurants = await restaurantsByCityId(cityId)
        setRestaurants(restaurants)
        seTtitle(getPageTitle(restaurants))
        setCuisines(getCuisinesGroupedToFilters(restaurants))
      } catch (error) {
        modal('Ocorreu um problema ao conectar com o servidor')
      } finally {
        setIsLoadingRestaurants(false)
      }

    }
    load()
  }, [cityId, modal])

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
              <h2>Restaurantes em {title}</h2>
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

function getPageTitle (restaurants) {
  return restaurants
    .find(rest => {
      if (rest.location && rest.location.city) return true
      return false
    })
    .location.city
}

function getCuisinesGroupedToFilters (restaurants) {
  let cuisines = []
  restaurants.forEach(restaurant => {
    restaurant.cuisinesTypes.forEach(cuisineType => {
      if (cuisines.find(cui => cui.slug === cuisineType.slug)) return
      cuisines.push(cuisineType)
    })
  });

  cuisines = sortCuisinesObjectsBySlug(cuisines)

  return cuisines
}

function sortCuisinesObjectsBySlug (cuisines) {
  return cuisines.sort((a,b) => {
    if (a.slug > b.slug) return 1
    if (a.slug < b.slug) return -1
    return 0
  })
}

function applyFilters (restaurants, filterOptions) {
  if (!filterOptions) return restaurants
  const restsFilteredByStars = filterByStars(restaurants, filterOptions.stars)
  const restsFilteredByValue = filterByValue(restsFilteredByStars, filterOptions.minMaxValue)
  const restsFilteredByCuisines = filterByCuisine(restsFilteredByValue, filterOptions.cuisines)
  return restsFilteredByCuisines
}

function filterByStars (restaurants, stars) {
  if (stars.length === 0) return restaurants
  return restaurants.filter(rest => {
    return stars.indexOf(rest.user_rating.aggregate_rating) >= 0
  })
}

function filterByValue (restaurants, minMaxValues) {
  const propNames = Object.getOwnPropertyNames(minMaxValues)

  const valuesToTest = propNames
    .map(prop => {
      return minMaxValues[prop]
    })
    .filter(mm => mm.checked)
  
  if (valuesToTest.length === 0) return restaurants

  return restaurants.filter(rest => {
    return valuesToTest.reduce((acc, mm) => {
      if (acc) return true
      return rest.average_cost_for_two >= mm.min && rest.average_cost_for_two <= mm.max
    }, false)
  })
}

function filterByCuisine (restaurants, cuisines) {
  if (cuisines.length === 0) return restaurants
  return restaurants.filter(rest => {
    return rest.cuisinesTypes.reduce((acc, cs) => {
      if (acc) return true
      return cuisines.includes(cs.slug)
    }, false)
  })
}
