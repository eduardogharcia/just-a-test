import React from 'react'
import { Fade, Container, CloseButton } from './Modal.styles'
import TimesIcon from './../../components/icons/TimesIcon'

const Modal = ({ text, close = () => {} }) => {
  return (
    <Fade>
      <Container>
        {text}
        <CloseButton type="button" onClick={close}><TimesIcon /></CloseButton>
      </Container>
    </Fade>
  )
}

export default Modal
