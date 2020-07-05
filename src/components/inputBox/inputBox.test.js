import React from 'react';
import InputBox from '../inputBox';
import { mount } from 'enzyme';
import { TiUser } from "react-icons/ti";

test('InputBox AllProps', () => {
  const onChange = jest.fn()
  const clearCallback = jest.fn()
  const inputBox = mount(<InputBox inputPlaceholder="Placeholder text" value="" icon={<TiUser />} clearButton={true} onChange={onChange} clearCallback={clearCallback}/>);
  expect(inputBox.find('.input_icon').exists()).toBe(true)

  inputBox.find('.text_input').simulate('change', {target: {value: 'test'}})
  expect(onChange).toBeCalledTimes(1)
  inputBox.setProps({value: 'test'})
  expect(inputBox.find('.clear_button').exists()).toBe(true)

  inputBox.find('.clear_button').simulate('click')
  expect(clearCallback).toBeCalledTimes(1)
});