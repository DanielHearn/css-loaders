// @flow

import React, {useRef, useState} from 'react';

import {
  Link
} from "react-router-dom";

import { slugify, shadeColor } from './../../helpers'
import { useContainerDimensions } from './../../hooks'
import loaders from './../../loaders'

import Loader from './../loader'
import FilteredGrid from './../filteredGrid'
import GridItem, { GridItemTitle} from './../gridItem'

import './loaderSelection.scss';

function LoaderGridItem({loader} : {loader: Object}) {
  const loaderLink = slugify(loader.name)
  const darkColor = shadeColor(loader.color, -0.1)
  const [hovered, setHovered] = useState(false)

  return (
    <GridItem onMouseEnter={(e)=> {setHovered(true)}} onMouseLeave={(e)=> {setHovered(false)}}>
      <Link to={`/loaders/${loaderLink}`} style={{margin: 0}}>
        <div className="loader_container" style={{backgroundColor: hovered ? darkColor : loader.color, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10em', flex: '1'}}>
          <Loader html={loader.code.html} css={loader.code.css}/>
        </div>
        <GridItemTitle>
          <p className="text bold" style={{margin: 0}}>{loader.name}</p>
        </GridItemTitle>
      </Link>
    </GridItem>
  )
}

export default function LoaderSelection() {
  const rootRef = useRef(null)
  const { width } = useContainerDimensions(rootRef)
  const columns = width < 600 ? 1 : width < 800 ? 2 : 3

  return (
    <div className="loader_selection" ref={rootRef}>
      <FilteredGrid 
        items={loaders}
        columns={columns}
        searchPlaceholder="Search loaders"
        noMatchElement={(<p>No matching loaders</p>)}
        matchFunction={(searchText, item) => {
          return searchText === '' || 
          item.name.toLowerCase().includes(searchText.toLowerCase())
        }}
        renderFunction={(loader) => {
          const loaderLink = slugify(loader.name)
          return (<LoaderGridItem key={loaderLink} loader={loader}/>)
        }
      }
      />
    </div>
  )
}