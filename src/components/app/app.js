// @flow

import React, {useState, useEffect} from 'react';
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
import { links, slugify } from './../../helpers'

const store = createStore(counterReducer)
const titleRoot = 'CSS Loaders'

const useTitle = title => {
  useEffect(() => {
    title && (document.title = title);
  });
};

function Home() {
  const [matchedLoaders, setMatchedLoaders] = useState(loaders);
  useTitle(`${titleRoot}`)

  function searchCallback(searchText) {
    filterLoaders(searchText)
  }

  function filterLoaders(searchText) {
    const matchingLoaders = loaders.filter(loader => {
      console.log(loader.name.toLowerCase())
      console.log(loader.name.toLowerCase().includes(searchText.toLowerCase()))
      return searchText === '' || 
      loader.name.toLowerCase().includes(searchText.toLowerCase())
    })

    setMatchedLoaders(matchingLoaders);
  }

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
          <p>Source on <Link to={links.github}>GitHub</Link></p>
          <p>Developed by <Link to={links.creator}>Daniel Hearn</Link></p>
        </div>
      </div>
      <div className="content">
        <SearchBox inputPlaceholder="Search loaders" searchCallback={searchCallback}/>
        {matchedLoaders.length ?
          <Grid items={matchedLoaders.map(loader => {
            const loaderLink = slugify(loader.name)
            return (
              <GridItem key={loaderLink} content={
                <>
                  <Loader html={loader.code.html} css={loader.code.css}/>
                  <Link to={`/loaders/${loaderLink}`}>{loader.name}</Link>
                </>
              }>
              </GridItem>
            )
          })}/>
        :
          <p>No matching loaders</p>
        }
      </div>
    </div>
  );
}

function GridItem({listKey, content}) {
  return (<li key={listKey}>{content}</li>)
}

function Grid({items}) {
  return (
    <ul className="grid">
      {items.map(item => {
        return item
      })}
    </ul>
  )
}

function Loader({html, css}) {
  return (
    <div>
      <style>
        {css}
      </style>
      <div dangerouslySetInnerHTML={{
        __html: html
      }}/>
    </div>
  )
}

function SearchBox({inputPlaceholder, searchCallback}) {
  return (
    <input name="text" placeholder={inputPlaceholder} onChange={(event)=> {
      searchCallback(event.target.value)
    }}/>
  )
}

function Redirect({url}) {
  const history = useHistory();
  history.push(url)
  return (<div/>)
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
          <p>{storedLoader.code.html}</p>
        </div>
      );
    } else {
      return (
        <Redirect url="/"/>
      );
    }
  }
}

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">CSS Loaders</Link>
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
