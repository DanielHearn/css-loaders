// @flow

import React from 'react';
import PropTypes from 'prop-types';
import './grid.scss';

export default function Grid({items = [], columns = 1} : {items: Array, columns: Number}) {
  return (
    <div className="grid" style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
      {items.map(item => {
        return item
      })}
    </div>
  )
}

Grid.propTypes = {
  items: PropTypes.array
}