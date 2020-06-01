import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { searchCities } from './../../services/api'
import PinIcon from './../icons/PinIcon'
import CircleNotchIcon from './../icons/CircleNotchIcon'

import {
  Form,
  InputArea,
  Button,
  SearchResults,
  IconContainer
} from './SearchCities.styles'

const SearchCities = ({ modal = () => {}}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [cities, setCities] = useState([])
  const [isLoadingCities, setIsLoadingCities] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    if (!searchTerm || isLoadingCities) return

    setIsLoadingCities(true)
    try {
      const cities = await searchCities(searchTerm)
      setCities(cities)
      if (cities.length > 0) {
        setShowResults(true)
      } else {
        modal('Ops, nada encontrado')      
      }
    } catch (error) {
      modal('Ocorreu um problema ao conectar com o servidor')      
    } finally {
      setIsLoadingCities(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputArea>
        <input
          type="text"
          autoFocus
          className="search-input"
          placeholder="Digite sua cidade"
          value={searchTerm}
          onChange={evt => setSearchTerm(evt.target.value)}
        />
        <InputIcon loading={isLoadingCities} />
        {showResults ? <SearchCitiesResultsList cities={cities} select={() => setShowResults(false)}  /> : ''} 
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
    <SearchResults className="result-list">
      {citiesToShow}
    </SearchResults>
  )
}

function InputIcon ({ loading = false }) {
  if (loading) {
    return (
      <IconContainer className="isLoading">
        <CircleNotchIcon />
      </IconContainer>
    )
  }
  return (
    <IconContainer className="pin">
      <PinIcon />
    </IconContainer>
  )
}

export default SearchCities;
