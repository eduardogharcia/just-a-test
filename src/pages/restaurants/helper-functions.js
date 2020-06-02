
export const getPageTitle = (restaurants) => {
  return restaurants
    .find(rest => {
      if (rest.location && rest.location.city) return true
      return false
    })
    .location.city
}

export const getCuisinesGroupedToFilters = (restaurants) => {
  let cuisines = []
  restaurants.forEach(restaurant => {
    restaurant.cuisinesTypes.forEach(cuisineType => {
      if (cuisines.find(cui => cui.slug === cuisineType.slug)) return
      cuisines.push(cuisineType)
    })
  });

  cuisines = sortCuisinesObjectsBySlug(cuisines)

  return cuisines
}

export const sortCuisinesObjectsBySlug = (cuisines) => {
  return cuisines.sort((a,b) => {
    if (a.slug > b.slug) return 1
    if (a.slug < b.slug) return -1
    return 0
  })
}

export const applyFilters = (restaurants, filterOptions) => {
  if (!filterOptions) return restaurants
  const restsFilteredByStars = filterByStars(restaurants, filterOptions.stars)
  const restsFilteredByValue = filterByValue(restsFilteredByStars, filterOptions.minMaxValue)
  const restsFilteredByCuisines = filterByCuisine(restsFilteredByValue, filterOptions.cuisines)
  return restsFilteredByCuisines
}

export const filterByStars = (restaurants, stars) => {
  if (stars.length === 0) return restaurants
  return restaurants.filter(rest => {
    return stars.indexOf(rest.user_rating.aggregate_rating) >= 0
  })
}

export const filterByValue = (restaurants, minMaxValues) => {
  const propNames = Object.getOwnPropertyNames(minMaxValues)

  const valuesToTest = propNames
    .map(prop => {
      return minMaxValues[prop]
    })
    .filter(mm => mm.checked)
  
  if (valuesToTest.length === 0) return restaurants

  return restaurants.filter(rest => {
    return valuesToTest.reduce((acc, mm) => {
      if (acc) return true
      return rest.average_cost_for_two >= mm.min && rest.average_cost_for_two <= mm.max
    }, false)
  })
}

export const filterByCuisine = (restaurants, cuisines) => {
  if (cuisines.length === 0) return restaurants
  return restaurants.filter(rest => {
    return rest.cuisinesTypes.reduce((acc, cs) => {
      if (acc) return true
      return cuisines.includes(cs.slug)
    }, false)
  })
}
