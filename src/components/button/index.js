// @flow

import React from 'react';
import type {Node} from 'react'
import './button.scss';

type Props = {
  type: 'primary',
  children: Node
}

export default function Button({
  type = 'primary', 
  children = 'Button',
  ...props
} : Props) {
  return (
    <button {...props} className={`button ${type}`}>
      {children}
    </button>
  )
}