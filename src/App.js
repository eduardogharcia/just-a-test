import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/home/Home'
import Restaurants from './pages/restaurants/Restaurants'
import NotFound from './pages/not-found/NotFound'
import Modal from './components/modal/Modal'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [modalText, setModalText] = useState('')
  function handleShowModal(text) {
    setModalText(text)
    setShowModal(true)
  }
  function handleHideModal(text) {
    setModalText('')
    setShowModal(false)
  }

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home modal={handleShowModal} />
          </Route>
          <Route path="/restaurants/:cityId" exact>
            <Restaurants  modal={handleShowModal} />
          </Route>
          <Route path="*">
              <NotFound />
            </Route>
        </Switch>
      </Router>
      { showModal && <Modal text={modalText} close={handleHideModal}/> }
    </>
  );
}

export default App;
