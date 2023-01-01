// @flow

import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider, connect } from 'react-redux'
import { mediaQueries } from './../../constants'
import { useMedia } from 'react-media';

import './app.scss';

import Nav from '../nav'
import AppLoader from '../appLoader'
import Loaders from '../../views/loaders'
import { store } from '../../store'
import ActionTypes from '../../store/actions'
import { setSmallScreen, setMediumScreen, setLargeScreen } from '../../store/actions/screen'
import { ToastContainer } from 'react-toastify';
import { ScreenTypes } from '../../store/actions'
import { FaTimes } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';

const LoadersMapStateToProps = state => ({
  screen: state.screen
})

const ConnectedLoaders = connect(LoadersMapStateToProps)(Loaders);


function AppWrapper() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<AppLoader/>}>
          <ConnectedApp/>
        </Suspense>
      </Router>
    </Provider>  
  );
}

function App({screen, setSmallScreen, setMediumScreen, setLargeScreen}) {
  const queryMatches = useMedia({ queries: mediaQueries });
  
  useEffect(() => {
    if (queryMatches.small && screen !== ActionTypes.SMALL_SCREEN) {
      setSmallScreen()
    } else if (queryMatches.medium && screen !== ActionTypes.MEDIUM_SCREEN) {
      setMediumScreen()
    } else if (queryMatches.large && screen !== ActionTypes.LARGE_SCREEN) {
      setLargeScreen()
    }
  }, [screen, queryMatches, setSmallScreen, setMediumScreen, setLargeScreen])
  
  return (
    <div className={`app ${screen.toLowerCase()}`}>
      <Nav/>
      <Switch>
        <Route path="/" component={ConnectedLoaders}/>
        <Redirect to="/" />
      </Switch>
      <ToastContainer 
        position={ screen === ScreenTypes.SMALL_SCREEN ? 'bottom-left' :'top-left' }
        limit={3}
        autoClose={3000}
        pauseOnFocusLoss={false}
        closeButton={FaTimes}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  screen: state.screen
})

const mapDispatchToProps = dispatch => ({
  setSmallScreen: () => dispatch(setSmallScreen()),
  setMediumScreen: () => dispatch(setMediumScreen()),
  setLargeScreen: () => dispatch(setLargeScreen())
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppWrapper