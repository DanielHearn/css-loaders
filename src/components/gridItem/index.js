// @flow

import React from 'react';
import PropTypes from 'prop-types';
import './gridItem.scss';

export default function GridItem({children, title, onMouseEnter = () => {}, onMouseLeave = () => {}} : {children: React.node, title: React.node, onMouseEnter: Function, onMouseLeave: Function}) {
  return (
    <div className="grid_item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  )
}

export function GridItemTitle({children} : {children: React.node}) {
  return (
    <div className="grid_item_title">
      {children}
    </div>
  )
} 

GridItem.propTypes = {
  children: PropTypes.node
}