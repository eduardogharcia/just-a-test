import React from 'react'
import { mount } from 'cypress-react-unit-test'
import Restaurant from './Restaurant'

describe('Restaurant', () => {
  it('Mounts with correct data', () => {
    const rest = {
      name: 'Nome do restaurante',
      user_rating: {
        aggregate_rating: 3
      },
      location: {
        locality_verbose: 'Endereço completo'
      },
      currency: '$',
      average_cost_for_two: '123',
      cuisines: 'Cozinha x, y, z'
    }
    mount(<Restaurant {...rest} />)

    cy.get('h3').contains('Nome do restaurante')
    cy.get('.restaurant_address').contains('Endereço completo')
    cy.get('.restaurant_price').contains('$123')
    cy.get('.restaurant_cuisines').contains('Cozinha x, y, z')
  })

  it ('Handle address absence', () => {
    const rest = {
      name: 'Nome do restaurante',
      user_rating: {
        aggregate_rating: 3
      },
      currency: '$',
      average_cost_for_two: '123',
      cuisines: 'Cozinha x, y, z'
    }
    mount(<Restaurant {...rest} />)

    cy.get('.restaurant_address')
      .should('not.exist')
  })
  
})