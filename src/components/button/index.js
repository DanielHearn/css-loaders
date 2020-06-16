// @flow

import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export default function Button({type = 'primary', children = 'Button'} : {type: string, children: React.node}) {
  return (
    <button className={`button ${type}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary']),
  children: PropTypes.node
}