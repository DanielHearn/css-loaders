import React from 'react';
import SearchForm from './../searchForm';

export default {
  title: 'SearchForm',
  component: SearchForm,
};

export const Element = () => <SearchForm onSubmit={(value)=> {
  console.log(value)
}}/>;