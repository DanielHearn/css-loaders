// @flow

import React from 'react';
import PropTypes from 'prop-types';

export default function Loader({html, css} : {html: string, css: string}) {
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

Loader.propTypes = {
  html: PropTypes.string,
  css: PropTypes.string
}