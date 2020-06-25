// @flow

import React, {useState} from 'react';
import type {Node} from 'react'
import './inputBox.scss';
import { TiDelete } from "react-icons/ti";

type Props = {
  inputPlaceholder: string,
  searchCallback: Function,
  icon?: Node,
  clearButton?: boolean
}

export default function InputBox({
  inputPlaceholder = 'Placeholder',
  searchCallback = (text) => {},
  icon = null,
  clearButton = false
} : Props) {
  const [text, setText] = useState('')

  return (
    <div className="input_box">
      {icon && <div className="input_icon">
        {icon}
      </div>}
      <input className={`text_input ${icon ? 'with-icon': ''}`} name="text" value={text} placeholder={inputPlaceholder} onChange={(event)=> {
        const newText = event.target.value
        setText(newText)
        searchCallback(newText)
      }}/>
      {clearButton && text.length ? <button className="clear_button" onClick={(event) => {
        setText('')
        searchCallback('')
      }}>
        <TiDelete />
      </button>
      : <></>}
    </div>
  )
}