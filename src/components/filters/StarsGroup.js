import React from 'react';

import Stars from './../stars/Stars'

function StarsGroup({change = () => {}}) {
  function handleToggle (evt) {
    change(parseInt(evt.target.value), evt.target.checked)
  }

  function starsToShow () {
    const toShow = []
    for (let i = 1; i <= 5; i++) {
      toShow.push(
        <label key={i} htmlFor={`rate-${i}`}>
          <input
            type="checkbox"
            value={i}
            name={`rate-${i}`}
            id={`rate-${i}`}
            onClick={handleToggle}
          />
          <Stars qty={i} type="outlined" />
        </label>
      )
    }
    return toShow
  }
  return starsToShow()
}

export default StarsGroup