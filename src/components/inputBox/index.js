// @flow

import React from 'react';
import type {Node} from 'react'
import './inputBox.scss';
import { FaRegTimesCircle } from "react-icons/fa";

type Props = {
  inputPlaceholder: string,
  value: string,
  onChange: Function,
  clearCallback?: Function,
  icon?: Node,
  clearButton?: boolean
}

export default function InputBox({
  inputPlaceholder = 'Placeholder',
  value = '',
  onChange = (e) => {},
  clearCallback = (e) => {},
  icon = null,
  clearButton = false
} : Props) {

  return (
    <div className="input_box">
      {icon && <div className="input_icon">
        {icon}
      </div>}
      <input className={`text_input ${icon ? 'with-icon': ''}`} placeholder={inputPlaceholder} name="text" value={value} onChange={onChange}/>
      {clearButton && value.length ? <span className="clear_button" onClick={clearCallback}>
        <FaRegTimesCircle />
      </span>
      : <></>}
    </div>
  )
}