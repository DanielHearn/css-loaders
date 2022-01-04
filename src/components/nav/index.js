// @flow

import React from 'react';
import type { Node } from 'react'
import './nav.scss';

export default function Nav(): Node {
  return (
    <nav className="nav">
      <span className="nav_title">CSS Loaders</span>
      <div className="nav_subtitle">By <a href="https://danielhearn.co.uk" className="link">Daniel Hearn</a></div>
    </nav>
  )
}