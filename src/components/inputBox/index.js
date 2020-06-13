// @flow

import React from 'react';

export default function InputBox({inputPlaceholder, searchCallback}) {
  return (
    <input name="text" placeholder={inputPlaceholder} onChange={(event)=> {
      searchCallback(event.target.value)
    }}/>
  )
}