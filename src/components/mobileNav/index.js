// @flow

import React, {useState, useEffect} from 'react';
import type {Node} from 'react'
import './mobileNav.scss';

type TabItem = {
  icon: Node,
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

  useEffect(() => {
    if (!tabs.filter(tab => tab.id === activeTab.id).length) {
      setActiveTab(tabs[0])
    }
  }, [tabs, activeTab.id])

  return (
    <div className="mobile_nav_container">
      <div className="mobile_nav_content">
        {activeTab.content}
      </div>
      <div className="mobile_nav_tabs">
        {tabs.map((tab) => {
          return (
            <button 
              className={`mobile_nav_tab ${tab.id === activeTab.id ? 'active' : ''}`}
              key={tab.id}
              onClick={() => {setActiveTab(tab)}}
              >
              <div className="mobile_nav_tab_icon">
                {tab.icon}
              </div>
              <p className="mobile_nav_tab_name">
                {tab.name}
              </p>
            </button>
          )
        })}
      </div>
    </div>
  )
}