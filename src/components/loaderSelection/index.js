// @flow

import React, {useRef, useState, useEffect} from 'react';

import {
  Link
} from "react-router-dom";

import { useContainerDimensions } from './../../hooks'
import loaders from './../../loaders'
import type {Loader as LoaderType } from './../../loaders'

import Loader from './../loader'
import FilteredGrid from './../filteredGrid'
import GridItem, { GridItemTitle} from './../gridItem'

import './loaderSelection.scss';

type ItemProps = {
  loader: LoaderType,
  active: boolean,
  onClick: Function
}

function LoaderGridItem({loader, active, onClick} : ItemProps) {
  const loaderLink = loader.key

  return (
    <GridItem active={active} onClick={(e) => {onClick(loader)}}>
      <Link to={`/${loaderLink}`} style={{margin: 0}}>
        <div className="loader_container" style={{background: loader.color, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10em', flex: '1'}}>
          <Loader html={loader.code.html} css={loader.code.css}/>
        </div>
        <GridItemTitle>
          <p className="text bold" style={{margin: 0}}>{loader.name}</p>
        </GridItemTitle>
      </Link>
    </GridItem>
  )
}

type Props = {
  initialActiveLoader?: string, 
  showActive?: boolean
}

export default function LoaderSelection({showActive = true, initialActiveLoader = ''} : Props) {
  const rootRef = useRef(null)
  const { width } = useContainerDimensions(rootRef)
  const columns = width < 600 ? 1 : width < 800 ? 2 : 3
  const [activeLoader, setActiveLoader] = useState(initialActiveLoader || loaders[0].key)
  console.log(initialActiveLoader)
  console.log(activeLoader)

  useEffect(() => {
    if (!showActive) {
      setActiveLoader('')
    }
  }, [showActive])

  useEffect(()=> {
    if (initialActiveLoader && activeLoader !== initialActiveLoader) {
      setActiveLoader(initialActiveLoader)
    }
  }, [activeLoader, initialActiveLoader])

  function clickLoader(loader) {
    setActiveLoader(loader.key)
  }

  return (
    <div className="loader_selection" ref={rootRef}>
      <FilteredGrid 
        items={loaders}
        columns={columns}
        searchPlaceholder="Search loaders"
        noMatchElement={(<p className="no-results">No loaders matching search term</p>)}
        matchFunction={(searchText: string, loader: LoaderType) => {
          return searchText === '' || 
          loader.name.toLowerCase().includes(searchText.toLowerCase())
        }}
        renderFunction={(loader: LoaderType) => {
          const loaderLink = loader.key

          return (<LoaderGridItem
            key={loaderLink}
            loader={loader}
            active={loaderLink === activeLoader}
            onClick={clickLoader}/>)
        }
      }
      />
    </div>
  )
}