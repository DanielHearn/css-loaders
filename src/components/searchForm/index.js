// @flow

import React, {useState} from 'react';
import { TiZoom } from "react-icons/ti";
import InputBox from "./../inputBox";

type Props = {
  onSubmit: Function,
}

export default function SearchForm({
  onSubmit = (value) => value,
} : Props) {
  const [inputValue, setInputValue] = useState('');

  function onChange(e) {
    setInputValue(e.target.value)
    onSubmit(e.target.value)
  }

  function clearCallback(e) {
    setInputValue('')
    onSubmit('')
  }
 
  function submitForm(e) {
    e.preventDefault();
    e.stopPropagation();
    onSubmit(inputValue)
  }

  return (
    <form className="search_form" onSubmit={submitForm}>
      <InputBox inputPlaceholder="Placeholder text" value={inputValue} icon={<TiZoom />} clearButton={true} onChange={onChange} clearCallback={clearCallback}/>
    </form>
  )
}