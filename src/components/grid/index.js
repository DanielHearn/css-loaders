// @flow

import React from 'react';
import PropTypes from 'prop-types';

export default function Grid({items} : {items: array}) {
  return (
    <ul className="grid">
      {items.map(item => {
        return item
      })}
    </ul>
  )
}

Grid.propTypes = {
  items: PropTypes.array
}