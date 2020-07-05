// @flow

import React, {useState} from 'react';
import type {Node} from 'react'

import Grid from './../grid'
import SearchForm from './../searchForm'
import './filteredGrid.scss';

type Props<T> = {
  items: Array<Object | string>, 
  columns?: number, 
  searchPlaceholder?: string, 
  noMatchElement?: Node, 
  matchFunction?: (searchText: string, item: T) => boolean,
  renderFunction?: (item: T) => Node
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
} : Props<any>) {
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
      <Grid columns={inputColumns} items={[<SearchForm key="search_form" onSubmit={(text) => {searchCallback(text)}}/>]}/>
      {matchedItems.length ?
        <Grid columns={columns} items={matchedItems.map((item: Node): Node => renderFunction(item))}/>
      :
        noMatchElement
      }
    </div>
  )
}