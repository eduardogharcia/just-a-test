import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { searchCities } from './../../services/api'

import {
  Form,
  InputArea,
  Button,
  SearchResults
} from './SearchCities.styles'

const SearchCities = () => {
  const [citySearched, setCitySearched] = useState('')
  const [cities, setCities] = useState([])
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const cities = await searchCities(citySearched)
    setCities(cities)
    if (cities.length > 0) {
      setShowResults(true)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputArea>
        <input
          type="text"
          placeholder="Digite sua cidade"
          value={citySearched}
          onChange={evt => setCitySearched(evt.target.value)}
        />
        {showResults ? <SearchCitiesResultsList cities={cities} select={() => setShowResults(false)} /> : ''} 
      </InputArea>
      <Button type="submit">Buscar</Button>
    </Form>
  )
}

function SearchCitiesResultsList ({ cities, select }) {
  const citiesToShow = cities.map(city => {
    return (
      <li key={city.id} onClick={select}>
        <Link to={`/restaurants/${city.id}`}>
          <p>
            {city.name}
            {city.state_code && ` - ${city.state_code}`}
          </p>
          {city.state_name && <span>Estado de {city.state_name}</span>}
        </Link>
      </li>
    )
  })

  return (
    <SearchResults>
      {citiesToShow}
    </SearchResults>
  )
}



export default SearchCities;
