// @flow

import React from 'react';
import type {Node} from 'react'
import './scrollBox.scss';

type Props = {
  children: Node,
  x?: boolean,
  y?: boolean}

export default function ScrollBox({
  children,
  x = false,
  y = false
} : Props) {
  return (
    <div className={`scroll_box ${x === true ? 'scroll-x' : ''} ${y === true ? 'scroll-y' : ''}`} >
      {children}
    </div>
  )
}
