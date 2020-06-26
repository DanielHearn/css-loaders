import React from 'react';
import Grid from '../grid';
import { shallow } from 'enzyme';

test('Grid content', () => {
  const columns = 1
  const grid = shallow(<Grid columns={columns} items={[
    <p key="item_1">Item 1</p>,
    <p key="item_2">Item 2</p>
  ]}/>);
  expect(grid.find('p').length).toBe(2);
  const style = grid.get(0).props.style
  expect(style).toHaveProperty('gridTemplateColumns', `repeat(${columns}, 1fr)`)
});

test('Grid columns', () => {
  const grid = shallow(<Grid columns={1} items={[
    <p key="item_1">Item 1</p>,
    <p key="item_2">Item 2</p>
  ]}/>);
  expect(grid.get(0).props.style).toHaveProperty('gridTemplateColumns', `repeat(1, 1fr)`)
  grid.setProps({ columns: 2 });
  expect(grid.get(0).props.style).toHaveProperty('gridTemplateColumns', `repeat(2, 1fr)`)
  grid.setProps({ columns: 3 });
  expect(grid.get(0).props.style).toHaveProperty('gridTemplateColumns', `repeat(3, 1fr)`)
});