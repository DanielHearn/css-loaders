// @flow

import React from 'react';
import PropTypes from 'prop-types';
import './inputBox.scss';

export default function InputBox({inputPlaceholder, searchCallback} : {inputPlaceholder: string, searchCallback: Function}) {
  return (
    <input className="input_box" name="text" placeholder={inputPlaceholder} onChange={(event)=> {
      searchCallback(event.target.value)
    }}/>
  )
}

InputBox.propTypes = {
  inputPlaceholder: PropTypes.string,
  searchCallback: PropTypes.func
}