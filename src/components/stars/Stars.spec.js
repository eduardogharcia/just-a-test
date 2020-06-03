import React from 'react'
import { mount } from 'cypress-react-unit-test'
import Stars from './Stars'

describe('Stars', () => {
  it('Mounts with corrent number of stars', () => {
    mount(<Stars qty={3} />)
    cy.get('.star')
      .should('have.length', 3)

    mount(<Stars qty={99} />)
      cy.get('.star')
        .should('have.length', 99) 

    mount(<Stars />)
      cy.get('.star')
        .should('have.length', 0) 
  })
})