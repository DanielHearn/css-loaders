import React from 'react';
import SearchForm from '../searchForm';
import { mount } from 'enzyme';

test('SearchForm', () => {
  const onSubmit = jest.fn()
  const searchForm = mount(<SearchForm onSubmit={onSubmit}/>);
  searchForm.find('input').simulate('change', {target: {value: 'test'}})
  expect(onSubmit).toBeCalledTimes(1)
});