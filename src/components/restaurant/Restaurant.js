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
    <Container className="restaurant">
      <ProfilePic src="https://via.placeholder.com/350x150" alt="" />
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


function TwoPeopleIcon() {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-friends" role="img" 
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <path fill="currentColor" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z" ></path>
    </svg>
  )
}
