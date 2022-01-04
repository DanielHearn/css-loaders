// @flow

import React from 'react';
import type { Node } from 'react'
import {
  Link,
  NavLink,
} from "react-router-dom";
import './nav.scss';
import { ScreenTypes } from '../../store/actions'

type Props = {
  screen: $Values<typeof ScreenTypes>
}

export default function Nav({screen = ScreenTypes.LARGE_SCREEN} : Props): Node {
  const smallScreen = screen === ScreenTypes.SMALL_SCREEN

  return (
    <nav className="nav">
      <Link className="nav_title" to="/">CSS Loaders</Link>
    </nav>
  )
}