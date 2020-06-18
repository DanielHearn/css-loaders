// @flow

import React from 'react';
import PropTypes from 'prop-types';
import './scrollBox.scss';

export default function ScrollBox({children, x = false, y = false} : {children: React.node, x: boolean, y: boolean}) {
  return (
    <div className={`scroll_box ${x === true ? 'scroll-x' : ''} ${y === true ? 'scroll-y' : ''}`} >
      {children}
    </div>
  )
}

ScrollBox.propTypes = {
  children: PropTypes.node
}