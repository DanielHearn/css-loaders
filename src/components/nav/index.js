// @flow

import React from 'react';
import type { Node } from 'react'
import {
  Link,
} from "react-router-dom";
import './nav.scss';

export default function Nav(): Node {
  return (
    <nav className="nav">
      <span className="nav_title">CSS Loaders</span>
    </nav>
  )
}