// @flow

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './inputBox.scss';
import { TiDelete } from "react-icons/ti";

export default function InputBox({inputPlaceholder = 'Placeholder', searchCallback, icon = null, clearButton = false} : {inputPlaceholder: string, searchCallback: Function, icon: React.node, clearButton: boolean}) {
  const [text, setText] = useState('')

  return (
    <div className="input_box">
      {icon && <div className="input_icon">
        {icon}
      </div>}
      <input className={`text_input ${icon ? 'with-icon': ''}`} name="text" value={text} placeholder={inputPlaceholder} onChange={(event)=> {
        setText(event.target.value)
        searchCallback(text)
      }}/>
      {clearButton && text.length ? <button className="clear_button" onClick={(event) => {
        setText('')
        searchCallback(text)
      }}>
        <TiDelete />
      </button>
      : <></>}
    </div>
  )
}

InputBox.propTypes = {
  inputPlaceholder: PropTypes.string,
  searchCallback: PropTypes.func,
  icon: PropTypes.node,
  clearButton: PropTypes.bool
}