import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { searchCities } from './../../services/api'

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

function CircleNotchIcon () {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-notch" role="img" 
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="currentColor" d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z" ></path>
    </svg>
  )
}

function PinIcon () {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" 
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
    </svg>
  )
}


export default SearchCities;
