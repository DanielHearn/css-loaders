import React from 'react';
import MobileNav from '../MobileNav';
import { shallow } from 'enzyme';
import { TiMediaPlay, TiCode, TiThSmall } from "react-icons/ti";

test('FilteredGrid content', () => {

  const tabs = [
    {
      id: 'tab_1',
      name: 'Tab 1',
      icon: <TiMediaPlay/>,
      content: ('Tab 1 Content</p>')
    },
    {
      id: 'tab_2',
      name: 'Tab 2',
      icon: <TiCode/>,
      content: ('Tab 2 Content')
    },
    {
      id: 'tab_3',
      name: 'Tab 3',
      icon: <TiThSmall/>,
      content: ('Tab 3 Content')
    }
  ]
  const mobileNav = shallow(<MobileNav tabs={tabs}/>);
  expect(mobileNav.find('.mobile_nav_tab').length).toBe(tabs.length);
  expect(mobileNav.find('.mobile_nav_tabs').childAt(0).hasClass('active')).toBe(true);
  expect(mobileNav.find('.mobile_nav_tabs').childAt(1).hasClass('active')).toBe(false);
  expect(mobileNav.find('.mobile_nav_tabs').childAt(2).hasClass('active')).toBe(false);
  expect(mobileNav.find('.mobile_nav_content').text()).toBe(tabs[0].content);
  
  mobileNav.find('.mobile_nav_tabs').childAt(1).simulate('click')
  expect(mobileNav.find('.mobile_nav_tab').length).toBe(tabs.length);
  expect(mobileNav.find('.mobile_nav_tabs').childAt(0).hasClass('active')).toBe(false);
  expect(mobileNav.find('.mobile_nav_tabs').childAt(1).hasClass('active')).toBe(true);
  expect(mobileNav.find('.mobile_nav_tabs').childAt(2).hasClass('active')).toBe(false);
  expect(mobileNav.find('.mobile_nav_content').text()).toBe(tabs[1].content);

  mobileNav.find('.mobile_nav_tabs').childAt(2).simulate('click')
  expect(mobileNav.find('.mobile_nav_tab').length).toBe(tabs.length);
  expect(mobileNav.find('.mobile_nav_tabs').childAt(0).hasClass('active')).toBe(false);
  expect(mobileNav.find('.mobile_nav_tabs').childAt(1).hasClass('active')).toBe(false);
  expect(mobileNav.find('.mobile_nav_tabs').childAt(2).hasClass('active')).toBe(true);
  expect(mobileNav.find('.mobile_nav_content').text()).toBe(tabs[2].content);
});