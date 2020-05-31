import React, { useState } from 'react';

function MinMaxValueGroup({change = () => {}}) {
  const [filterOptions, setFilterOptions] = useState(defaultFilterOptions)
  function handleToggle (evt) {
    const newOptions = filterOptions
    newOptions[evt.target.value].checked = evt.target.checked
    setFilterOptions(newOptions)
    change(newOptions)
  }

  return (
    <>
      <label htmlFor="custo_ate_50">
        <input type="checkbox" value={'50'} name="custo_ate_50" id="custo_ate_50" onClick={handleToggle} />
        <span>Até R$50</span>
      </label>
      <label htmlFor="custo_50_80">
        <input type="checkbox" value={'50-80'} name="custo_50_80" id="custo_50_80" onClick={handleToggle} />
        <span>De R$50 a R$80</span>
      </label>
      <label htmlFor="custo_80_110">
        <input type="checkbox" value={'80-110'} name="custo_80_110" id="custo_80_110" onClick={handleToggle} />
        <span>De R$80 a R$110</span>
      </label>
      <label htmlFor="custo_plus_110">
        <input type="checkbox" value={'110'} name="custo_plus_110" id="custo_plus_110" onClick={handleToggle} />
        <span>Acima de R$110</span>
      </label>
    </>
  )
}

export default MinMaxValueGroup

const defaultFilterOptions = {
  '50': {
    min: 0,
    max: 50,
    checked: false
  },
  '50-80': {
    min: 50,
    max: 80,
    checked: false
  },
  '80-110': {
    min: 80,
    max: 110,
    checked: false
  },
  '110': {
    min: 110,
    max: Number.MAX_SAFE_INTEGER,
    checked: false
  }
}