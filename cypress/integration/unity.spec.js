import {
  filterRequiredApiReturns,
  prepareCuisinesTypes
} from './../../src/services/api'

import {
  getPageTitle,
  getCuisinesGroupedToFilters,
  sortCuisinesObjectsBySlug
} from './../../src/pages/restaurants/helper-functions'

describe('API unity tests', () => {
  it('Verify restaurant object contains some properties', () => {
    expect(filterRequiredApiReturns({
      user_rating: {
        aggregate_rating: '2'
      }
    })).to.be.true

    expect(filterRequiredApiReturns({
      user_rating: {
        aggregate_rating: 3
      }
    })).to.be.true

    expect(filterRequiredApiReturns({
      user_rating: ''
    })).to.be.false

    expect(filterRequiredApiReturns({
      user_rating: {}
    })).to.be.false

    expect(filterRequiredApiReturns({})).to.be.false
  })

  it('Split and prepare cuisines string of restaurant object', () => {
    const result1 = prepareCuisinesTypes({
      cuisines: 'Cozinha 1, áãâêéí-îóôpú, Cozinha 3'
    })

    expect(result1.length).to.be.equal(3)

    expect(result1[0]).to.have.property('slug')
    expect(result1[0]).to.have.property('name')
    expect(result1[0].slug).to.be.equal('cozinha-1')
    expect(result1[0].name).to.be.equal('Cozinha 1')
    expect(result1[1].slug).to.be.equal('aaaeei-ioopu')

    const restult2 =  prepareCuisinesTypes({})
    expect(restult2).to.be.an('array')
    expect(restult2.length).to.be.equal(0)
  })
})

describe('Restaurants unity tests', () => {
  describe('getPageTitle()', () => {
    it('Returns the city name of the first item in array', () => {
      const result = getPageTitle([
        { location: { city: 'Brasília' } },
        { location: { city: 'São Paulo' } },
        { location: { city: 'Belo Horizonte' } }
      ])
      expect(result).to.be.equal('Brasília')
    })
  
    it('Ignore restaurants without location info', () => {
      const result = getPageTitle([
        { location: '' },
        { location: { city: 'São Paulo' } },
        { location: { city: 'Belo Horizonte' } }
      ])
      expect(result).to.be.equal('São Paulo')
    })
  })

  describe('getCuisinesGroupedToFilters()', () => {
    it('Group cuisines types', () => {
      const result = getCuisinesGroupedToFilters([
        {
          cuisinesTypes: [
            { name: 'Cozinha 1', slug: 'cozinha-1' },
            { name: 'Cozinha 2', slug: 'cozinha-2' },
          ]
        },
        {
          cuisinesTypes: [
            { name: 'Cozinha 2', slug: 'cozinha-2' },
            { name: 'Cozinha 3', slug: 'cozinha-3' },
          ]
        },
        {
          cuisinesTypes: [
            { name: 'Cozinha 1', slug: 'cozinha-1' },
            { name: 'Cozinha 2', slug: 'cozinha-2' },
          ]
        },
      ])

      expect(result.length).to.be.equal(3)
      expect(result).to.be.deep.equal([
        { name: 'Cozinha 1', slug: 'cozinha-1' },
        { name: 'Cozinha 2', slug: 'cozinha-2' },
        { name: 'Cozinha 3', slug: 'cozinha-3' }
      ])

    })
  })

  describe('sortCuisinesObjectsBySlug()', () => {
    it('Sorts cuisine type array by slug', () => {
      const result = sortCuisinesObjectsBySlug([
        { name: 'Churrasco', slug: 'cozinha-2' },
        { name: 'Pizza', slug: 'cozinha-1' },
        { name: 'Burguer', slug: 'cozinha-3' }
      ])

      expect(result).to.be.deep.equal([
        { name: 'Pizza', slug: 'cozinha-1' },
        { name: 'Churrasco', slug: 'cozinha-2' },
        { name: 'Burguer', slug: 'cozinha-3' }
      ])
    })
  })
})