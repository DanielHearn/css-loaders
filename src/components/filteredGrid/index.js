// @flow

import React, {useState} from 'react';

import Grid from './../grid'
import InputBox from './../inputBox'

export default function FilteredGrid({items, searchPlaceholder, noMatchElement, matchFunction, renderFunction}) {
  const [matchedItems, setMatchedItems] = useState(items);

  function searchCallback(searchText) {
    filterItems(searchText)
  }

  function filterItems(searchText) {
    const matchingItems = items.filter(item => {
      return matchFunction(searchText, item)
    })

    setMatchedItems(matchingItems);
  }

  return (
    <div>
      <InputBox inputPlaceholder={searchPlaceholder} searchCallback={searchCallback}/>
      {matchedItems.length ?
        <Grid items={matchedItems.map(item => renderFunction(item))}/>
      :
        noMatchElement
      }
    </div>
  )
}