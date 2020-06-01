import cities from './../fixtures/cities'
import restaurants from './../fixtures/restaurants.json'

describe('Restaurants page', () => {
  it('Change url', () => {
    cy.visit('/')
    cy.server()
    cy.route({
      method: 'GET',
      url: '/api/v2.1/cities*',
      response: cities
    })
    cy.route({
      method: 'GET',
      url: '/api/v2.1/search*',
      response: restaurants
    })

    cy.get('.search-input')
      .type('São Paulo')
      .type('{enter}')

    cy.contains('Cidade 1')
      .click()

    cy.url()
      .should('include', '/restaurants/73')
  })

  it('Show city name on title', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '/api/v2.1/search*',
      response: restaurants
    })
    cy.visit('/restaurants/73')
    cy.contains('Restaurantes em Brasília')
  })

  it('Filter by note', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '/api/v2.1/search*',
      response: restaurants
    })
    cy.visit('/restaurants/73')

    cy.get('.result-area .restaurant')
      .as('results')

    cy.get('@results')
      .should('have.length', 19)

    cy.get('label[for="rate-1"]')
      .click()
    
    cy.get('@results')
      .should('have.length', 1)
    
    cy.get('label[for="rate-1"]')
      .click()

    cy.get('@results')
      .should('have.length', 19)

    cy.get('label[for="rate-4"]')
      .click()
    
    cy.get('@results')
      .should('have.length', 15)

    cy.get('label[for="rate-4"]')
      .click()

    cy.get('label[for="rate-5"]')
      .click()

    cy.get('@results')
      .should('have.length', 0)

  })

  it('Filter by value', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '/api/v2.1/search*',
      response: restaurants
    })
    cy.visit('/restaurants/73')

    cy.get('.result-area .restaurant')
      .as('results')

    cy.get('label[for="custo_ate_50"]')
      .click()

    cy.get('@results')
      .should('have.length', 2)

    cy.get('label[for="custo_ate_50"]')
      .click()
    
    cy.get('label[for="custo_80_110"]')
      .click()

    cy.get('@results')
      .should('have.length', 6)

    cy.get('label[for="custo_80_110"]')
      .click()

    cy.get('label[for="custo_plus_110"]')
      .click()

    cy.get('@results')
      .should('have.length', 10)
  })

  it('Filter by cuisines', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '/api/v2.1/search*',
      response: restaurants
    })
    cy.visit('/restaurants/73')

    cy.get('.result-area .restaurant')
      .as('results')

    cy.get('label[for="cuisine-american"]')
      .click()

    cy.get('@results')
      .should('have.length', 2)

    cy.get('label[for="cuisine-american"]')
      .click()

    cy.get('label[for="cuisine-argentine"]')
      .click()

    cy.get('@results')
      .should('have.length', 1)

    cy.get('label[for="cuisine-argentine"]')
      .click()
  })
})