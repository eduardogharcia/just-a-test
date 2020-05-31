import React from 'react';

function CuisinesGroup({ cuisines, change = () => {} }) {
  function handleToggle (evt) {
    change(evt.target.value, evt.target.checked)
  }

  function cuisinesToShow (cuisines) {
    const toShow = []
    cuisines.forEach(cuisine => {
      toShow.push(
        <label key={cuisine.slug} htmlFor={`cuisine-${cuisine.slug}`}>
          <input
            type="checkbox"
            name={`cuisine-${cuisine.slug}`}
            value={cuisine.slug}
            id={`cuisine-${cuisine.slug}`}
            onClick={handleToggle}
          />
          <span>{cuisine.name}</span>
        </label>
      )
    });
    return toShow
  }
  return cuisinesToShow(cuisines)
}

export default CuisinesGroup