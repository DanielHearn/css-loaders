import React from 'react';
import App from './../app';
import { mount } from 'enzyme';
import Nav from './../nav'
import Home from '../../views/home'
import Loaders from '../../views/loaders'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

test('App', () => {
  const app = mount(<App/>);
  expect(app.containsMatchingElement(Nav)).toBe(true);
  expect(app.containsMatchingElement(Home)).toBe(true);
  expect(app.find('.title').exists()).toBe(true);
  expect(app.find('.code_container').exists()).toBe(false);
});