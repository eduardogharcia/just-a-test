import React from 'react'
import logoRed from './../../assets/logo-red.jpg'
import logoWhite from './../../assets/logo-white.jpg'

import { Container } from './Logo.styles'

function Logo({ type = 'red' }) {
  const finalLogo = type === 'red' ? logoRed : logoWhite
  return (
  <Container>
    <img src={finalLogo} alt="Logotipo UaiFood" title="UaiFood" />
  </Container>
  )
}

export default Logo