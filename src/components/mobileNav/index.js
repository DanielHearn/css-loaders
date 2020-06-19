// @flow

import React, {useState} from 'react';
import type {Node} from 'react'
import { slugify } from './../../helpers'

type TabItem = {
  id: string,
  name: string,
  content: Node
}

type Props = {
  tabs: Array<TabItem>
}

export default function MobileNav({
  tabs
} : Props) {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <div className="mobile_nav_container">
      <div className="mobile_nav_content">
        {activeTab.content}
      </div>
      <div className="tabs">
        {tabs.map((tab) => {
          const tabID = slugify(tab.id)
          return (
            <button 
              className={`tab ${tabID === activeTab ? 'active' : ''}`}
              key={tabID}
              onClick={() => {setActiveTab(tab)}}
              >
              {tab.id}
            </button>
          )
        })}
      </div>
    </div>
  )
}