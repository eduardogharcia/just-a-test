import React from 'react';

import { Container, Fieldset } from './Filter.styles'
import Stars from './../stars/Stars'

function Filter() {
  return (
    <Container action="#">
      <Fieldset>
        <legend>Nota</legend>
        <label htmlFor="nota_1">
          <input type="checkbox" name="nota_1" id="nota_1" />
          <Stars stars="1" />
        </label>
        <label htmlFor="nota_2">
          <input type="checkbox" name="nota_2" id="nota_2" />
          <Stars stars="2" />
        </label>
        <label htmlFor="nota_3">
          <input type="checkbox" name="nota_3" id="nota_3" />
          <Stars stars="3" />
        </label>
        <label htmlFor="nota_4">
          <input type="checkbox" name="nota_4" id="nota_4" />
          <Stars stars="4" />
        </label>
        <label htmlFor="nota_5">
          <input type="checkbox" name="nota_5" id="nota_5" />
          <Stars stars="5" />
        </label>
      </Fieldset>
      <Fieldset>
        <legend>Custo para 2 pessoas</legend>
        <label htmlFor="custo_ate_50">
          <input type="checkbox" name="custo_ate_50" id="custo_ate_50" />
          <span>Até R$50</span>
        </label>
        <label htmlFor="custo_50_80">
          <input type="checkbox" name="custo_50_80" id="custo_50_80" />
          <span>De R$50 a R$80</span>
        </label>
        <label htmlFor="custo_80_110">
          <input type="checkbox" name="custo_80_110" id="custo_80_110" />
          <span>De R$80 a R$110</span>
        </label>
        <label htmlFor="custo_plus_110">
          <input type="checkbox" name="custo_plus_110" id="custo_plus_110" />
          <span>Acima de R$110</span>
        </label>
      </Fieldset>
      <Fieldset>
        <legend>Tipo de cozinha</legend>
        <label htmlFor="arabe">
          <input type="checkbox" name="arabe" id="arabe" />
          <span>Árabe</span>
        </label>
        <label htmlFor="brasileira">
          <input type="checkbox" name="brasileira" id="brasileira" />
          <span>Brasileira</span>
        </label>
        <label htmlFor="chinesa">
          <input type="checkbox" name="chinesa" id="chinesa" />
          <span>Chinesa</span>
        </label>
        <label htmlFor="francesa">
          <input type="checkbox" name="francesa" id="francesa" />
          <span>Francesa</span>
        </label>
        <label htmlFor="frutos-do-mar">
          <input type="checkbox" name="frutos-do-mar" id="frutos-do-mar" />
          <span>Frutos do mar</span>
        </label>
        <label htmlFor="italiana">
          <input type="checkbox" name="italiana" id="italiana" />
          <span>Italiana</span>
        </label>
        <label htmlFor="japonesa">
          <input type="checkbox" name="japonesa" id="japonesa" />
          <span>Japonesa</span>
        </label>
        <label htmlFor="mexicana">
          <input type="checkbox" name="mexicana" id="mexicana" />
          <span>Mexicana</span>
        </label>
        <label htmlFor="peruana">
          <input type="checkbox" name="peruana" id="peruana" />
          <span>Peruana</span>
        </label>
      </Fieldset>
    </Container>
  );
}

export default Filter
