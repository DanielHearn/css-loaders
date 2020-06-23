// @flow

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Provider } from 'react-redux'

import './app.scss';

import Nav from '../nav'
import Home from '../../views/home'
import Loaders from '../../views/loaders'
import { store } from '../../store'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Nav>
            <Link className="nav_title" to="/">CSS Loaders</Link>
          </Nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/loaders">
              <Loaders />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>  
  );
}

export default App;
