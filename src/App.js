import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Component/Home/Home';
import NotMatched from './Component/NotMatched/NotMatched';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountryDetails from './Component/CounteryDetails/CountryDetails';
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/country-details/:countryName/:countryAlpha3code">
          <CountryDetails />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotMatched />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
