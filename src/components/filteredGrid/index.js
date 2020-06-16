// @flow

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Grid from './../grid'
import InputBox from './../inputBox'
import './filteredGrid.scss';

export default function FilteredGrid({items, columns = 1, searchPlaceholder, noMatchElement, matchFunction, renderFunction}
  : {items: Array, columns: Number, searchPlaceholder: string, noMatchElement: React.node, matchFunction: Function, renderFunction: Function}) {
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
      <Grid columns={inputColumns} items={[<InputBox key="input_1" inputPlaceholder={searchPlaceholder} searchCallback={searchCallback}/>]}/>
      {matchedItems.length ?
        <Grid columns={columns} items={matchedItems.map(item => renderFunction(item))}/>
      :
        noMatchElement
      }
    </div>
  )
}

FilteredGrid.propTypes = {
  items: PropTypes.array,
  columns: PropTypes.number,
  searchPlaceholder: PropTypes.string,
  noMatchElement: PropTypes.node,
  renderFunction: PropTypes.func
}