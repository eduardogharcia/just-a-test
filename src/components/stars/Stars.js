import React from 'react'
import { StarContainer } from './Stars.styles'
import StarFilledIcon from './../icons/StarFilledIcon'
import StarOutlinedIcon from './../icons/StarOutlinedIcon'

function Stars({ qty = 0, type = 'filled'}) {
  const stars = []
  for(let i = 1; i <= qty; i++){
    stars.push(
      <StarContainer className="star" key={i}>
        {
          type === 'filled' ?
          <StarFilledIcon /> :
          <StarOutlinedIcon />
        }
      </StarContainer>
    )
  }
  return (
    <span>{stars}</span>
  );
}

export default Stars;
