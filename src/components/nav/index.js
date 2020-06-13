// @flow

import React from 'react';

export default function Nav({content, children}) {
  return (
    <nav className="nav">
      {children}
    </nav>
  )
}