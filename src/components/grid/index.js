// @flow

import React from 'react';
import type {Node} from 'react'
import './grid.scss';

type Props = {
  items: Array<Node>,
  columns: number
}

export default function Grid({
  items = [],
  columns = 1
} : Props) {
  return (
    <div className="grid" style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
      {items.map(item => {
        return item
      })}
    </div>
  )
}