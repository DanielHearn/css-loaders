// @flow

import React, {useState} from 'react';
import type {Node} from 'react'

import Grid from './../grid'
import InputBox from './../inputBox'
import './filteredGrid.scss';
import { TiZoom } from "react-icons/ti";

type Props = {
  items: Array<Object | string>, 
  columns?: number, 
  searchPlaceholder?: string, 
  noMatchElement?: Node, 
  matchFunction?: (searchText: string, item: Object | string) => boolean,
  renderFunction?: (item: Object | string) => Node
}

export default function FilteredGrid({
  items = [], 
  columns = 3, 
  searchPlaceholder = 'Search', 
  noMatchElement = <p>No results found</p>, 
  matchFunction = (searchText: string, item: string): boolean => {
    return searchText === '' || 
    item.toLowerCase().includes(searchText.toLowerCase())
  }, 
  renderFunction = (item: string): Node => <li>{item}</li>
} : Props) {
  const [matchedItems, setMatchedItems] = useState(items);
  const inputColumns = columns <= 3 ? columns : 3

  function searchCallback(searchText: string): void {
    filterItems(searchText)
  }

  function filterItems(searchText: string): void {
    const matchingItems = items.filter((item: Node): boolean => matchFunction(searchText, item))

    setMatchedItems(matchingItems);
  }

  return (
    <div className="filtered_grid">
      <Grid columns={inputColumns} items={[<InputBox key="input_1" inputPlaceholder={searchPlaceholder} icon={<TiZoom />} clearButton={true} searchCallback={searchCallback}/>]}/>
      {matchedItems.length ?
        <Grid columns={columns} items={matchedItems.map((item: Node): Node => renderFunction(item))}/>
      :
        noMatchElement
      }
    </div>
  )
}