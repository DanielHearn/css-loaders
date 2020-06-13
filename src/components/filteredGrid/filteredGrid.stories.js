import React from 'react';
import FilteredGrid from '../filteredGrid';
import GridItem from '../gridItem';

export default {
  title: 'FilteredGrid',
  component: FilteredGrid,
};

const items = [
  {
    id: 1,
    content: 'Text 1'
  },
  {
    id: 2,
    content: 'Text 2'
  }
]

export const WithContent = () => <FilteredGrid 
  items={items}
  searchPlaceholder="Search items"
  noMatchElement={(<p>No matching items</p>)}
  matchFunction={(searchText, item) => {
    return searchText === '' || 
    item.content.toLowerCase().includes(searchText.toLowerCase())
  }}
  renderFunction={(item) => {
    return (
      <GridItem key={item.id}>
        <p>{item.content}</p>
      </GridItem>
    )
  }}
/>;