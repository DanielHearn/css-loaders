// @flow

import React from 'react';

type Props = {
  html: string,
  css: string
}

export default function Loader({html, css} : Props) {
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