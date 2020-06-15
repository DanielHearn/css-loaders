import React from 'react';
import MobileNav from '../mobileNav';

export default {
  title: 'MobileNav',
  component: MobileNav,
};

const tabs = [
  {
    id: 'Tab 1',
    content: (<p>Content 1</p>)
  },
  {
    id: 'Tab 2',
    content: (<p>Content 2</p>)
  },
  {
    id: 'Tab 3',
    content: (<p>Content 3</p>)
  }
]

export const WithContent = () => {
  return (
    <MobileNav tabs={tabs}/>
  )
};