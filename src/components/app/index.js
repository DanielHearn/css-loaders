// @flow

import React, { Suspense } from 'react';
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
import AppLoader from '../appLoader'
import Home from '../../views/home'
import Loaders from '../../views/loaders'
import { store } from '../../store'

function App() {
  const queryMatches = useMedia({ queries: mediaQueries });

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<AppLoader/>}>
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
                    <NavLink className="nav_link" exact to="/">About</NavLink>
                    <NavLink className="nav_link" to="/loaders/">Loaders</NavLink>
                  </div>
                  <div className="column-1"/>
                </>
              }
            </Nav>
            <Switch>
              <Route exact path="/"  component={Home}/>
              <Route path="/loaders" component={Loaders}/>
              <Redirect to="/" />
            </Switch>
          </div>
        </Suspense>
      </Router>
    </Provider>  
  );
}

export default App;
