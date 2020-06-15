// @flow

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { slugify } from './../../helpers'

export default function MobileNav({tabs} : {tabs: array}) {
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

MobileNav.propTypes = {
  tabs: PropTypes.array
}