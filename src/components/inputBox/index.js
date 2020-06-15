// @flow

import React from 'react';
import PropTypes from 'prop-types';

export default function InputBox({inputPlaceholder, searchCallback} : {inputPlaceholder: string, searchCallback: Function}) {
  return (
    <input name="text" placeholder={inputPlaceholder} onChange={(event)=> {
      searchCallback(event.target.value)
    }}/>
  )
}

InputBox.propTypes = {
  inputPlaceholder: PropTypes.string,
  searchCallback: PropTypes.func
}