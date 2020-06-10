// @flow

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './../../store/reducers/counterReducer'
import './app.scss';
import loaders from './../../loaders'
const store = createStore(counterReducer)

function slugify(string) {
  return string.toLowerCase().replace(' ', '_')
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Description of CSS loaders</p>
      <h3>Loaders</h3>
      <ul>
        {loaders.map(loader => {
          const loaderLink = slugify(loader.name)
          return <li><Link to={`/loaders/${loaderLink}`}>{loader.name}</Link></li>
        })}
      </ul>
    </div>
  );
}

function Loaders() {
  const history = useHistory();
  const loaderMatch = useRouteMatch('/loaders/:loaderName');
  const loaderName = loaderMatch.params.loaderName
  
  if(loaderName === null || loaderName === '') {
    history.push("/");
  } else {
    const storedLoader = loaders.filter(loader => 
      loaderName === slugify(loader.name)
    )[0]

    if (storedLoader) {
      return (
        <div>
          <h2>Loader</h2>
          <p>{storedLoader.code.html}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Loader does not exist</h2>
        </div>
      );
    }
  }
}

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">CSS Loaders</Link>
        </li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Nav/>

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
