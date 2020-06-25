import React from 'react';
import Button from '../button';
import { shallow } from 'enzyme';

test('Button children', () => {
  const buttonText = 'Button Text';
  const checkbox = shallow(<Button>{buttonText}</Button>);
  expect(checkbox.text()).toEqual(buttonText);
});

test('Button click', () => {
  const buttonText = 'Button Text';
  const clickFunction = jest.fn();
  const checkbox = shallow(<Button onClick={clickFunction}>{buttonText}</Button>);
  expect(clickFunction).toBeCalledTimes(0)
  checkbox.find('button').simulate('click');
  expect(clickFunction).toBeCalledTimes(1)
});

test('Button type', () => {
  const buttonText = 'Button Text';
  const type = 'primary'
  const checkbox = shallow(<Button type={type}>{buttonText}</Button>);
  expect(checkbox.hasClass(type)).toBe(true)
});