// @flow

import React from 'react';
import type {Node} from 'react'
import './nav.scss';

type Props = {
  children: Node
}

export default function Nav({
  children
} : Props) {
  return (
    <nav className="nav">
      {children}
    </nav>
  )
}