// @flow

import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export default function Button({type = 'primary', children = 'Button', onClick = null} : {type: string, children: React.node, handleClick: Function}) {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary']),
  children: PropTypes.node,
  onClick: PropTypes.func
}