// @flow

import React from 'react';
import type {Node} from 'react'
import PropTypes from 'prop-types';
import './button.scss';

type Props = {
  type: 'primary',
  children: Node,
  onClick?: Function
}

export default function Button({
  type = 'primary', 
  children = 'Button',
  onClick = () => {}
} : Props) {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {children}
    </button>
  )
}