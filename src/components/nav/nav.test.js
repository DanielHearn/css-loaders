import React from 'react';
import Nav from '../Nav';
import ReactDOMServer from 'react-dom/server';
import { shallow } from 'enzyme';

test('Nav children', () => {
  const content = <p>Content</p>
  const nav = shallow(<Nav>{content}</Nav>);
  expect(nav.containsMatchingElement(content)).toEqual(true);
});