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
import { links, slugify, useTitle } from './../../helpers'
import loaders from './../../loaders'

import Redirect from './../redirect'
import Nav from './../nav'
import Loader from './../loader'
import FilteredGrid from './../filteredGrid'
import GridItem from './../gridItem'
import Tabs from './../tabs'

const store = createStore(counterReducer)
const titleRoot = 'CSS Loaders'

function Home() {
  useTitle(`${titleRoot}`)

  return (
    <div>
      <div className="header">
        <div className="column-3">
          <h2 className="title">CSS Loaders</h2>
        </div>
        <div className="column-2">
          <p>Open-source website showcasing a collection of CSS loading animations along
    with their HTML, CSS, and SCSS code.</p>
        </div>
        <div className="column-1">
          <p>Source on <a href={links.github}>GitHub</a></p>
          <p>Developed by <a href={links.creator}>Daniel Hearn</a></p>
        </div>
      </div>
      <div className="content">
        <FilteredGrid 
          items={loaders}
          searchPlaceholder="Search loaders"
          noMatchElement={(<p>No matching loaders</p>)}
          matchFunction={(searchText, item) => {
            return searchText === '' || 
            item.name.toLowerCase().includes(searchText.toLowerCase())
          }}
          renderFunction={(loader) => {
            const loaderLink = slugify(loader.name)
            return (
              <GridItem key={loaderLink} content={
                <>
                  <Loader html={loader.code.html} css={loader.code.css}/>
                  <Link to={`/loaders/${loaderLink}`}>{loader.name}</Link>
                </>
              }/>
            )
          }}
        />
      </div>
    </div>
  );
}

function Loaders() {
  const history = useHistory();
  const loaderMatch = useRouteMatch('/loaders/:loaderName');
  const loaderName = loaderMatch.params.loaderName;
  useTitle(`${titleRoot}: ${loaderName}`)
  
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
          <Loader html={storedLoader.code.html} css={storedLoader.code.css}/>
          <Tabs tabs={Object.keys(storedLoader.code).map(id => {
            return {
              id: id,
              content: storedLoader.code[id]
            }
          })}/>
        </div>
      );
    } else {
      return (
        <Redirect url="/"/>
      );
    }
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Nav content={<Link to="/">CSS Loaders</Link>}/>
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
