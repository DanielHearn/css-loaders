// @flow

import React from 'react';
import { connect } from 'react-redux'
import { useTitle } from './../../hooks'
import { titleRoot, links } from './../../constants'
import ActionTypes from '../../store/actions'

import LoaderSelection from './../../components/loaderSelection'
import ScrollBox from './../../components/scrollBox'

export default function Home({ screen } : {screen: string}) {
  useTitle(`${titleRoot}`)
  const smallScreen = screen === ActionTypes.SMALL_SCREEN

  return (
    <>
      <div className="header">
        <div className="header_content">
          <div className="row">
            <div className="column-3">
              <h2 className="title text-center">CSS Loaders</h2>
            </div>
          </div>
          <div className={`${smallScreen ? 'column' : 'row'}`}>
            <div className={`${smallScreen ? 'column-3' : 'column-2'}`}>
              <p className="text">Open-source website showcasing a collection of CSS loading animations along
        with their HTML, CSS, and SCSS code.</p>
            </div>
            <div className={`${smallScreen ? 'row justify-space-between' : 'column-1 text-right'}`}>
              <p className="text">Source on <a className="link light" href={links.github}>GitHub</a></p>
              <p className="text">Developed by <a className="link light" href={links.creator}>Daniel Hearn</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="content_container">
          <ScrollBox y={true}>
            <div className="content">
              <div style={{marginBottom: '2em'}}>
                <LoaderSelection/>
              </div>
            </div>
          </ScrollBox>
      </div>
    </>
  );
}