// @flow

import React from 'react';
import PropTypes from 'prop-types';

export default function GridItem({children} : {children: React.node}) {
  return (<li>{children}</li>)
}

GridItem.propTypes = {
  children: PropTypes.node
}