// @flow

import React, {useState} from 'react';
import { FaSearch } from "react-icons/fa";
import InputBox from "./../inputBox";

type Props = {
  onSubmit: Function,
  placeholder?: string,
}

export default function SearchForm({
  onSubmit = (value) => value,
  placeholder = 'Search'
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
      <InputBox inputPlaceholder={placeholder} value={inputValue} icon={<FaSearch />} clearButton={true} onChange={onChange} clearCallback={clearCallback}/>
    </form>
  )
}