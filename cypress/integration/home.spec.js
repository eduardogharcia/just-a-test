import cities from './../fixtures/cities.json'

describe('Home page', () => {
  beforeEach(() => cy.visit('/'))

  it('Focuses input on load', () => {
    cy.focused()
      .should('have.class', 'search-input')
  })

  it('Accepts input', () => {
    const typeTest = 'Hello mars'
    cy.get('.search-input')
      .type(typeTest)
      .should('have.value', typeTest)
  })

  it ('Show and Hide loading spinner', () => {
    cy.get('.search-input')
      .type('São Paulo')
      .type('{enter}')
    
    cy.get('.isLoading')
    cy.get('.pin')
  })

  it ('Show Searched cities', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '/api/v2.1/cities*',
      response: cities
    })

    cy.get('.search-input')
      .type('São Paulo')
      .type('{enter}')
    
    cy.get('.result-list')
    cy.contains('Cidade 1')
    cy.contains('Estado de California')
    cy.contains('Estado de Texas')
  })

  it ('Submit by button', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '/api/v2.1/cities*',
      response: cities
    })

    cy.get('.search-input')
      .type('São Paulo')
    
    cy.contains('Buscar')
      .click()
  })

  it ('Show and Hide error modal', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '/api/v2.1/cities*',
      status: 500,
      response: []
    })

    cy.get('.search-input')
      .type('São Paulo')
      .type('{enter}')
    
    cy.contains('Ocorreu um problema ao conectar com o servidor')
      .find('button')
      .click()

    cy.contains('Ocorreu um problema ao conectar com o servidor')
      .should('not.exist')

  })

  it ('Show a not found modal message', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '/api/v2.1/cities*',
      response: {
        location_suggestions: []
      }
    })

    cy.get('.search-input')
      .type('São Paulo')
      .type('{enter}')

    cy.contains('Ops, nada encontrado')
  })
})