import React from 'react';

import { Container } from './Filters.styles'
import { TitleLoading, LineLoading } from './FiltersPlaceholder.styles'

function FiltersPlaceholders() {
  const linesToShow = (qty) => {
    const lines = []
    for (let i = 0; i < qty; i++) {
      lines.push(<LineLoading key={i} type="normal" />)      
    }
    return lines
  }

  return (
    <Container>
      <TitleLoading />
      {linesToShow(5)}
      <TitleLoading />
      {linesToShow(5)}
      <TitleLoading />
      {linesToShow(5)}
    </Container>
  )
}

export default FiltersPlaceholders