import {
  searchCities,
  restaurantsByCityId
} from './../../src/services/api'

describe('API Tests', () => {
  it('Load cities properly', async () => {
    const results = await searchCities('rio')
    expect(results).to.be.an('array')
    
    const city = results[0]
    expect(city).to.have.property('id')
    expect(city).to.have.property('name')
    expect(city).to.have.property('state_code')
    expect(city).to.have.property('state_name')
  })

  it('Load restaurants properly', async () => {
    const results = await restaurantsByCityId('66')
    expect(results).to.be.an('array')

    const restaurant = results[0]
    expect(restaurant).to.have.property('name')
    expect(restaurant).to.have.property('location')
    expect(restaurant.user_rating).to.have.property('aggregate_rating')
    expect(restaurant).to.have.property('currency')
    expect(restaurant).to.have.property('average_cost_for_two')
    expect(restaurant).to.have.property('cuisines')
    expect(restaurant.cuisinesTypes).to.be.an('array')
  })
})