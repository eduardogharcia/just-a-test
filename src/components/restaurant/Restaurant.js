import React from 'react'
import { Container } from './Restaurant.styles'
import {
  DescriptionBox,
  ProfilePic,
  Title,
  Address,
  Meta,
  Featured,
  FeaturedSuccess
} from './Restaurant.styles'
import Stars from './../stars/Stars'

function Restaurant(rest) {
  return (
    <Container>
      <ProfilePic src="https://via.placeholder.com/350x150" alt="" />
      <DescriptionBox>
        <Title>{rest.name}</Title>
        { rest.location && <Address>{rest.location.locality_verbose}</Address>}
        { rest.user_rating && <Stars stars={ Math.round(parseFloat(rest.user_rating.aggregate_rating))} /> }
        <Meta>
          <FeaturedSuccess>{rest.currency}{rest.average_cost_for_two}</FeaturedSuccess>
          <Featured>Japonesa</Featured>
        </Meta>
      </DescriptionBox>
    </Container>
  )
}

export default Restaurant