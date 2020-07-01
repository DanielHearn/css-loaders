// @flow

import React from 'react';
import type {Node} from 'react'
import './gridItem.scss';

type ItemProps = {
  children: Node
}

type TitleProps = {
  children: Node
}

export default function GridItem({
  children,
  ...props
} : ItemProps) {
  return (
    <div {...props} className="grid_item">
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