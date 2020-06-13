// @flow

import React from 'react';

export default function Grid({items}) {
  return (
    <ul className="grid">
      {items.map(item => {
        return item
      })}
    </ul>
  )
}