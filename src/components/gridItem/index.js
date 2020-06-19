// @flow

import React from 'react';
import type {Node} from 'react'
import './gridItem.scss';

type ItemProps = {
  children: Node,
  onMouseEnter?: Function,
  onMouseLeave?: Function
}

type TitleProps = {
  children: Node
}

export default function GridItem({
  children,
  onMouseEnter = () => {},
  onMouseLeave = () => {}
} : ItemProps) {
  return (
    <div className="grid_item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  )
}

export function GridItemTitle({children} : TitleProps) {
  return (
    <div className="grid_item_title">
      {children}
    </div>
  )
} 