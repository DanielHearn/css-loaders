import React from 'react';
import FilteredGrid from '../filteredGrid';
import { mount } from 'enzyme';

test('FilteredGrid content', () => {
  const items = [
    {
      id: 1,
      content: 'Text 1'
    },
    {
      id: 2,
      content: 'Text 2'
    }
  ]  
  const filteredGrid = mount(<FilteredGrid
    items={items}
    searchPlaceholder="Search items"
    noMatchElement={(<p>No matching items</p>)}
    matchFunction={(searchText, item) => {
      return searchText === '' || 
      item.content.toLowerCase().includes(searchText.toLowerCase())
    }}
    renderFunction={(item) => <p key={item.id}>{item.content}</p>}
  />);
  expect(filteredGrid.find('p').length).toBe(items.length);
  
  const inputBox = filteredGrid.find('input')
  const searchText = '2'
  inputBox.simulate('change', {target: {value: searchText}})

  expect(filteredGrid.find('p').length).toBe(1);
  expect(filteredGrid.find('p').text()).toBe(items[1].content);
});