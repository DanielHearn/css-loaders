// @flow

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import { Provider } from 'react-redux'
import { mediaQueries } from './../../constants'
import { useMedia } from 'react-media';

import './app.scss';

import Nav from '../nav'
import Home from '../../views/home'
import Loaders from '../../views/loaders'
import { store } from '../../store'
import loaders from './../../loaders'
import { slugify } from './../../helpers'


function App() {
  const queryMatches = useMedia({ queries: mediaQueries });

  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Nav>
            {queryMatches.small ?
              <Link className="nav_title" to="/">CSS Loaders</Link>
              :
              <>
                <div className="column-1">
                  <Link className="nav_title" to="/">CSS Loaders</Link>
                </div>
                <div className="column-1" style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <NavLink className="nav_title" exact to="/">About</NavLink>
                  <NavLink className="nav_title" to="/loaders/">Loaders</NavLink>
                </div>
                <div className="column-1"/>
              </>
            }
          </Nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/loaders">
              <Loaders />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </Provider>  
  );
}

export default App;
