import React from 'react';
import LoaderSelection from '../LoaderSelection';
import loaders from './../../loaders';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';

const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
}

test('LoaderSelection', () => {
  const loaderSelection = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <LoaderSelection/>
    </MemoryRouter>
  );
  expect(loaderSelection.find('.grid_item').length).toBe(loaders.length)
  loaderSelection.find('.grid_item .grid_item_title').forEach((node, i) => {
    expect(node.text()).toContain(loaders[i].name);
  });
});