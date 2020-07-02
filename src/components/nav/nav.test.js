import React from 'react';
import Nav from '../nav';
import ReactDOMServer from 'react-dom/server';
import { shallow } from 'enzyme';

test('Nav cotent', () => {
  const nav = shallow(<Nav/>);
  expect(nav.text()).toContain('CSS Loaders')
});