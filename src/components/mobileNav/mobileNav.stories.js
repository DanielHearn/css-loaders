import React from 'react';
import MobileNav from '../mobileNav';

import { TiMediaPlay, TiCode, TiThSmall } from "react-icons/ti";

export default {
  title: 'MobileNav',
  component: MobileNav,
};

const tabs = [
  {
    name: 'Animation',
    icon: <TiMediaPlay/>,
    content: (<p>Animation Content</p>)
  },
  {
    name: 'Code',
    icon: <TiCode/>,
    content: (<p>Code Content</p>)
  },
  {
    name: 'Library',
    icon: <TiThSmall/>,
    content: (<p>Library Content</p>)
  }
]

export const WithContent = () => {
  return (
    <MobileNav tabs={tabs}/>
  )
};