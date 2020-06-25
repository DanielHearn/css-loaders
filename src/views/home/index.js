// @flow

import React from 'react';

import { useTitle } from './../../hooks'
import { titleRoot, mediaQueries, links } from './../../constants'
import { useMedia } from 'react-media';

import LoaderSelection from './../../components/loaderSelection'
import ScrollBox from './../../components/scrollBox'

export default function Home() {
  useTitle(`${titleRoot}`)
  const queryMatches = useMedia({ queries: mediaQueries });

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