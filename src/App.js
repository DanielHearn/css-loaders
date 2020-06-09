// @flow

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//import Counter from './components/counter'
import counterReducer from './reducers/counterReducer'
import './App.scss';
const store = createStore(counterReducer)
const loaders = [
  {
    name: "Box",
    code: {
      html: "html code",
      css: "css code",
      scss: "scss code"
    }
  }
]

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Description of CSS loaders</p>
      <h3>Loaders</h3>
      <ul>
        {loaders.map(loader => {
          return <li>{loader.name}</li>
        })}
      </ul>
    </div>
  );
}

function Loaders() {
  return (
    <div>
      <h2>Loader</h2>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

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
