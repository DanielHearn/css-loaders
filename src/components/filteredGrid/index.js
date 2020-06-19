// @flow

import React, {useState} from 'react';
import type {Node} from 'react'
import PropTypes from 'prop-types';

import Grid from './../grid'
import InputBox from './../inputBox'
import './filteredGrid.scss';
import { TiZoom } from "react-icons/ti";

type Props = {
  items: Array<Object | string>, 
  columns?: number, 
  searchPlaceholder?: string, 
  noMatchElement?: Node, 
  matchFunction?: Function, 
  renderFunction?: Function
}

export default function FilteredGrid({
  items = [], 
  columns = 3, 
  searchPlaceholder = 'Search', 
  noMatchElement = <p>No results found</p>, 
  matchFunction = (searchText, item) => {
    return searchText === '' || 
    item.toLowerCase().includes(searchText.toLowerCase())
  }, 
  renderFunction = (item) => item
} : Props) {
  const [matchedItems, setMatchedItems] = useState(items);
  const inputColumns = columns <= 3 ? columns : 3

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
    <div className="filtered_grid">
      <Grid columns={inputColumns} items={[<InputBox key="input_1" inputPlaceholder={searchPlaceholder} icon={<TiZoom />} clearButton={true} searchCallback={searchCallback}/>]}/>
      {matchedItems.length ?
        <Grid columns={columns} items={matchedItems.map(item => renderFunction(item))}/>
      :
        noMatchElement
      }
    </div>
  )
}