import React from 'react';
import Loader from '../Loader';
import { shallow } from 'enzyme';

test('Loader html and css', () => {
  const html = '<div class="loading_animation">Loading</div>';
  const css = '.loading_animation { background: red; }';
  const loader = shallow(<Loader html={html} css={css}/>);
  expect(loader.html()).toContain(html);
  expect(loader.html()).toContain(css);
});