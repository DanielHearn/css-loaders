// @flow

import React from 'react';
import PropTypes from 'prop-types';

export default function Button({type = 'primary', children = 'Button'} : {type: string, children: React.node}) {
  return (
    <button className={`button ${type}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node
}