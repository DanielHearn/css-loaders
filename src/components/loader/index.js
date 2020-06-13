// @flow

import React from 'react';

export default function Loader({html, css}) {
  return (
    <div>
      <style>
        {css}
      </style>
      <div dangerouslySetInnerHTML={{
        __html: html
      }}/>
    </div>
  )
}