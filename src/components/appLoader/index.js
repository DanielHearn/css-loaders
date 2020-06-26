// @flow

import React from 'react';

import './appLoader.scss';

export default function AppLoader() {
  return (
    <div className="app_loader">
      <div className='square_app_loader'>
        <div className='square'></div>
        <div className='square'></div>
        <div className='square'></div>
        <div className='square'></div>
      </div>
    </div>
  )
}