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
import Placeholder from './../../assets/restaurant-placeholder.jpg'
import TwoPeopleIcon from './../icons/TwoPeopleIcon'

function Restaurant(rest) {
  return (
    <Container className="restaurant">
      <ProfilePic src={Placeholder} alt="" />
      <DescriptionBox>
        <Title>{rest.name}</Title>
        { rest.location && <Address>{rest.location.locality_verbose}</Address>}
        <Stars qty={ rest.user_rating.aggregate_rating } />
        <Meta>
          <FeaturedSuccess><TwoPeopleIcon />{rest.currency}{rest.average_cost_for_two}</FeaturedSuccess>
          <Featured>{rest.cuisines}</Featured>
        </Meta>
      </DescriptionBox>
    </Container>
  )
}

export default Restaurant
