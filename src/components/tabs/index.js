// @flow

import React, {useState, useEffect} from 'react';
import type {Node} from 'react'
import './tabs.scss';

import { slugify } from './../../helpers'

type TabItem = {
  id: string,
  name: string,
  content: Node
}

type Props = {
  tabs: Array<TabItem>
}

export default function Tabs({
  tabs = []
} : Props) {
  const [activeTab, setActiveTab] = useState(tabs[0])

  useEffect(() => {
    if (!tabs.filter(tab => tab.id === activeTab.id).length) {
      setActiveTab(tabs[0])
    }
  }, [tabs, activeTab.id])

  return (
    <div className="tabs_container">
      <div className="tabs">
        {tabs.map((tab) => {
          const tabID = slugify(tab.id)

          return (
            <button 
              className={`tab ${tabID === activeTab.id ? 'active' : ''}`}
              key={tabID}
              onClick={() => {setActiveTab(tab)}}
              >
              {tab.name}
            </button>
          )
        })}
      </div>
      <div className="tabs_content">
        {activeTab.content}
      </div>
    </div>
  )
}