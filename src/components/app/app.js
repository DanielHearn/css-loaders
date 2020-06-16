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
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import {
enableMobile,
disableMobile
} from '../../store/actions/mobile'
import mobileReducer from '../../store/reducers/mobileReducer'
import './app.scss';
import { links, slugify, unslugify, capitaliseWords, useTitle } from './../../helpers'
import loaders from './../../loaders'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useMedia } from 'react-media';

import Redirect from './../redirect'
import Nav from './../nav'
import Loader from './../loader'
import FilteredGrid from './../filteredGrid'
import GridItem, { GridItemTitle} from './../gridItem'
import Tabs from './../tabs'

const store = createStore(mobileReducer)
const titleRoot = 'CSS Loaders'
const mobileWidth = '700'

const GLOBAL_MEDIA_QUERIES = {
  small: "(max-width: 599px)",
  medium: "(min-width: 600px) and (max-width: 1199px)",
  large: "(min-width: 1200px)"
};

function Home() {
  useTitle(`${titleRoot}`)
  const queryMatches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

  return (
    <>
      <div className="header">
        <div className="header_content">
          <div className="row">
            <div className="column-3">
              <h2 className="title text-center">CSS Loaders</h2>
            </div>
          </div>
          <div className={`${queryMatches.small ? 'column' : 'row'}`}>
            <div className={`${queryMatches.small ? 'column-3' : 'column-2'}`}>
              <p className="text">Open-source website showcasing a collection of CSS loading animations along
        with their HTML, CSS, and SCSS code.</p>
            </div>
            <div className={`${queryMatches.small ? 'row justify-space-between' : 'column-1 text-right'}`}>
              <p className="text">Source on <a className="link light" href={links.github}>GitHub</a></p>
              <p className="text">Developed by <a className="link light" href={links.creator}>Daniel Hearn</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="content_container">
        <div className="content" style={{marginBottom: '3em'}}>
          <FilteredGrid 
            items={loaders}
            columns={queryMatches.small ? 1 : queryMatches.medium ? 2 : 3}
            searchPlaceholder="Search loaders"
            noMatchElement={(<p>No matching loaders</p>)}
            matchFunction={(searchText, item) => {
              return searchText === '' || 
              item.name.toLowerCase().includes(searchText.toLowerCase())
            }}
            renderFunction={(loader) => {
              const loaderLink = slugify(loader.name)
              return (
                <GridItem key={loaderLink}>
                  <Link to={`/loaders/${loaderLink}`} style={{margin: 0}}>
                    <div style={{backgroundColor: loader.color, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10em', flex: '1'}}>
                      <Loader html={loader.code.html} css={loader.code.css}/>
                    </div>
                    <GridItemTitle>
                      <p className="text bold" style={{margin: 0}}>{loader.name}</p>
                    </GridItemTitle>
                  </Link>
                </GridItem>
              )
            }}
          />
        </div>
      </div>
    </>
  );
}

function Loaders() {
  const history = useHistory();
  const loaderMatch = useRouteMatch('/loaders/:loaderName');
  const loaderName = loaderMatch.params.loaderName;
  useTitle(`${capitaliseWords(unslugify(loaderName))} - ${titleRoot}`)
  
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
              content: (   
                <SyntaxHighlighter language={id} style={docco}>
                  {storedLoader.code[id]}
                </SyntaxHighlighter>
              )
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
