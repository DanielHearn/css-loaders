import React from 'react';
import GridItem, { GridItemTitle } from '../GridItem';
import { shallow } from 'enzyme';

test('GridItem content', () => {
  const content = <p>Content</p>
  const gridItem = shallow(<GridItem>{content}</GridItem>);
  expect(gridItem.containsMatchingElement(content)).toEqual(true);
});

test('GridItem content with Title', () => {
  const content = <p>Content</p>
  const gridItem = shallow(<GridItem>{content}</GridItem>);
  expect(gridItem.containsMatchingElement(content)).toEqual(true);
}); 

test('GridItemTitle content', () => {
  const content = <p>Title content</p>
  const gridItemTitle = shallow(<GridItemTitle>{content}</GridItemTitle>);
  expect(gridItemTitle.containsMatchingElement(content)).toEqual(true);
});

test('GridItemTitle mouseEnter', () => {
  const content = <p>Content</p>
  const enterFunction = jest.fn()
  const gridItem = shallow(<GridItem onMouseEnter={enterFunction}>{content}</GridItem>);
  gridItem.simulate("mouseenter");
  expect(enterFunction).toBeCalledTimes(1)
});

test('GridItemTitle mouseLeave', () => {
  const content = <p>Content</p>
  const leaveFunction = jest.fn()
  const gridItem = shallow(<GridItem onMouseLeave={leaveFunction}>{content}</GridItem>);
  gridItem.simulate("mouseleave");
  expect(leaveFunction).toBeCalledTimes(1)
});

test('GridItemTitle mouseEnter and mouseLeave', () => {
  const content = <p>Content</p>
  const enterFunction = jest.fn()
  const leaveFunction = jest.fn()
  const gridItem = shallow(<GridItem onMouseEnter={enterFunction} onMouseLeave={leaveFunction}onMouseLeave={leaveFunction}>{content}</GridItem>);
  gridItem.simulate("mouseenter");
  expect(enterFunction).toBeCalledTimes(1)
  expect(leaveFunction).toBeCalledTimes(0)
  gridItem.simulate("mouseleave");
  expect(enterFunction).toBeCalledTimes(1)
  expect(leaveFunction).toBeCalledTimes(1)
});