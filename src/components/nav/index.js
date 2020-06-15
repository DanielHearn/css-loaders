// @flow

import React from 'react';
import PropTypes from 'prop-types';

export default function Nav({children} : {children: React.node}) {
  return (
    <nav className="nav">
      {children}
    </nav>
  )
}

Nav.propTypes = {
  children: PropTypes.node
}