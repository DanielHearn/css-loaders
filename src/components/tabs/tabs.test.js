import React from 'react';
import Tabs from '../tabs';
import { shallow } from 'enzyme';

test('FilteredGrid content', () => {
  const tabItems = [
    {
      id: '1',
      name: 'Tab 1',
      content: 'Text 1'
    },
    {
      id: '2',
      name: 'Tab 2',
      content: 'Text 2'
    }
  ]  
  const tabs = shallow(<Tabs tabs={tabItems}/>);
  expect(tabs.find('.tab').length).toBe(tabItems.length);
  expect(tabs.find('.tabs').childAt(0).hasClass('active')).toBe(true);
  expect(tabs.find('.tabs').childAt(1).hasClass('active')).toBe(false);
  expect(tabs.find('.tabs_content').text()).toBe(tabItems[0].content);
  
  tabs.find('.tabs').childAt(1).simulate('click')
  expect(tabs.find('.tab').length).toBe(tabItems.length);
  expect(tabs.find('.tabs').childAt(0).hasClass('active')).toBe(false);
  expect(tabs.find('.tabs').childAt(1).hasClass('active')).toBe(true);
  expect(tabs.find('.tabs_content').text()).toBe(tabItems[1].content);
});