import React from 'react';
import InputBox from '../inputBox';
import { shallow } from 'enzyme';
import { TiUser } from "react-icons/ti";

test('InputBox AllProps', () => {
  const input = 'some text';
  const searchCallback = jest.fn()
  const inputBox = shallow(<InputBox inputPlaceholder="Placeholder text" icon={<TiUser />} clearButton={true} searchCallback={searchCallback}/>);
  
  inputBox.find('.text_input').simulate('change', {target: {value: input}})
  expect(searchCallback).toBeCalledTimes(1)
  expect(searchCallback).toBeCalledWith(input)
  expect(inputBox.find('.input_icon').exists()).toBe(true)
  expect(inputBox.find('.clear_button').exists()).toBe(true)

  inputBox.find('.clear_button').simulate('click')
  expect(searchCallback).toBeCalledTimes(2)
  expect(searchCallback).toBeCalledWith('')
});