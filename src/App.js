import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/home/Home'
import Restaurants from './pages/restaurants/Restaurants'
import NotFound from './pages/not-found/NotFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/restaurants/:cityId" exact>
          <Restaurants />
        </Route>
        <Route path="*">
            <NotFound />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
