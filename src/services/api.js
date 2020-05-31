import axios from 'axios'
import slugify  from 'slugify'

const api = axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  timeout: 1000 * 40,
  withCredentials: false
})

api.interceptors.request.use(request => {
  request.headers = { ...request.headers, 'user-key': '77576b2dae845bf32c1de0795a7753e1' }
  return request
}, err => {
  return Promise.reject(err)
})

export const searchCities = async (searchTerm) => {
  const response = await api.get(`/cities?q=${searchTerm}`)
  return response.data.location_suggestions
}

export const restaurantsByCityId = async (cityId) => {
  const response = await api.get(`/search?city_id=${cityId}`)
  const restaurants = response.data.restaurants
    .map(objWrapper => objWrapper.restaurant)
    .filter(filterRequiredApiReturns)
    .map(restaurant => {
      return {
        ...restaurant,
        cuisinesTypes: prepareCuisinesTypes(restaurant),
        user_rating: {
          ...restaurant.user_rating,
          aggregate_rating: Math.round(parseFloat(restaurant.user_rating.aggregate_rating))
        }
      }
    })
    

  return restaurants
}

export const establishmentsByCityId = async (cityId) => {
  const response = await api.get(`/establishments?city_id=${cityId}`)
  return response.data.establishments
}


function prepareCuisinesTypes (restaurant) {
  return restaurant.cuisines
    .split(',')
    .map(cuisine => {
      return {
        slug: slugify(cuisine.trim().toLowerCase()),
        name: cuisine.trim()
      }
    })
}

function filterRequiredApiReturns (rest) {
  return rest.user_rating && rest.user_rating.aggregate_rating
}