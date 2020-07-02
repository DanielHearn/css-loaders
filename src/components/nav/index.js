// @flow

import React from 'react';
import {
  Link,
  NavLink,
} from "react-router-dom";
import './nav.scss';
import { connect } from 'react-redux'
import ActionTypes from '../../store/actions'

export default function Nav({screen} : {screen: string}) {
  const smallScreen = screen === ActionTypes.SMALL_SCREEN

  return (
    <nav className="nav">
      {smallScreen ?
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
    </nav>
  )
}