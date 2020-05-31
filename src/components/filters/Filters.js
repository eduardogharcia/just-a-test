import React, { useState } from 'react';

import { Container, Fieldset } from './Filters.styles'
import StarsGroup from './StarsGroup'
import MinMaxValueGroup from './MinMaxValueGroup'
import CuisinesGroup from './CuisinesGroup'

function Filters({ cuisines = [], change = () => {} }) {
  const [filterOptions, setFilterOptions] = useState({
    stars: [],
    minMaxValue: [],
    cuisines: []
  })

  function handleChangeStars (star, isChecked) {
    const index = filterOptions.stars.findIndex(st => st === star)
    let newOptions = {}
    if (isChecked && index === -1) {
      newOptions = {
        ...filterOptions,
        stars: filterOptions.stars = [...filterOptions.stars, star]
      }
    } else {
      newOptions = {
        ...filterOptions,
        stars: filterOptions.stars.filter(st => st !== star)
      }
    }
    
    setFilterOptions(newOptions)
    change(newOptions)
  }
  function handleChangeMinMax (options) {
    const newOptions = {
      ...filterOptions,
      minMaxValue: options
    }

    setFilterOptions(newOptions)
    change(newOptions)
  }
  function handleChangeCuisines (cuisine, isChecked) {
    const index = filterOptions.cuisines.findIndex(cs => cs === cuisines)
    let newOptions = {}
    if (isChecked && index === -1) {
      newOptions = {
        ...filterOptions,
        cuisines: filterOptions.cuisines = [...filterOptions.cuisines, cuisine]
      }
    } else {
      newOptions = {
        ...filterOptions,
        cuisines: filterOptions.cuisines.filter(cs => cs !== cuisine)
      }
    }
    
    setFilterOptions(newOptions)
    change(newOptions)
  }

  return (
    <Container>
      <Fieldset>
        <legend>Nota</legend>
        <StarsGroup change={handleChangeStars} />
      </Fieldset>
      <Fieldset>
        <legend>Custo para 2 pessoas</legend>
        <MinMaxValueGroup change={handleChangeMinMax} />
      </Fieldset>
      <Fieldset>
        <legend>Tipo de cozinha</legend>
        <CuisinesGroup cuisines={cuisines} change={handleChangeCuisines} />
      </Fieldset>
    </Container>
  );
}

export default Filters