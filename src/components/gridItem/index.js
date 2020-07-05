// @flow

import React from 'react';
import type {Node} from 'react'
import './gridItem.scss';

type ItemProps = {
  children: Node,
  active: boolean
}

type TitleProps = {
  children: Node
}

export default function GridItem({
  children,
  active = false,
  ...props
} : ItemProps) {
  return (
    <div {...props} className={`grid_item ${active ? 'active' : ''}`}>
      {children}
    </div>
  )
}

export function GridItemTitle({children, ...props} : TitleProps) {
  return (
    <div {...props} className="grid_item_title">
      {children}
    </div>
  )
} 