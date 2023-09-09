// @flow

import React, { useState, useRef, useEffect } from 'react'
import type { Node } from 'react'

import Grid from './../grid'
import SearchForm from './../searchForm'
import './filteredGrid.scss'

type Props<T> = {
  items: Array<T>,
  columns?: number,
  searchPlaceholder?: string,
  noMatchElement?: Node,
  matchFunction?: (searchText: string, item: T) => boolean,
  renderFunction?: (item: T) => Node,
}

export default function FilteredGrid({
  items = [],
  columns = 3,
  searchPlaceholder = 'Search',
  noMatchElement = <p key="no_match">No results found</p>,
  matchFunction = (searchText: string, item: string): boolean => {
    return searchText === '' || item.toLowerCase().includes(searchText.toLowerCase())
  },
  renderFunction = (item: string): Node => <li>{item}</li>,
}: Props<any>) {
  const [matchedItems, setMatchedItems] = useState(items)
  const inputColumns = columns <= 3 ? columns : 3
  const ref = useRef(null)

  function searchCallback(searchText: string): void {
    filterItems(searchText)
  }

  function filterItems(searchText: string): void {
    const matchingItems = items.filter((item: Node): boolean => matchFunction(searchText, item))

    setMatchedItems(matchingItems)
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0
    }
  }, [ref, matchedItems, columns])

  return (
    <div className="filtered_grid">
      <div className="filtered_grid-search">
        <Grid
          columns={inputColumns}
          items={[
            <SearchForm
              key="search_form"
              onSubmit={(text) => {
                searchCallback(text)
              }}
              placeholder="Search loaders"
            />,
          ]}
        />
      </div>
      <div className="filtered_grid-items" ref={ref}>
        {matchedItems.length ? (
          <Grid
            columns={columns}
            items={matchedItems.map((item: Node): Node => renderFunction(item))}
          />
        ) : (
          <Grid columns={columns} items={[noMatchElement]} />
        )}
      </div>
    </div>
  )
}
