// @flow

import React, {useRef, useState, useEffect} from 'react';

import {
  Link
} from "react-router-dom";

import { slugify, shadeColor } from './../../helpers'
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
  const loaderLink = slugify(loader.name)
  const darkColor = shadeColor(loader.color, -0.15)
  const [hovered, setHovered] = useState(false)

  return (
    <GridItem active={active} onClick={(e) => {onClick(loader)}} onMouseEnter={(e)=> {setHovered(true)}} onMouseLeave={(e)=> {setHovered(false)}}>
      <Link to={`/loaders/${loaderLink}`} style={{margin: 0}}>
        <div className="loader_container" style={{backgroundColor: hovered || active ? darkColor : loader.color, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10em', flex: '1'}}>
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
  showActive?: boolean,
  removeActive?: boolean
}

export default function LoaderSelection({showActive = true, initialActiveLoader = '', removeActive = false} : Props) {
  const rootRef = useRef(null)
  const { width } = useContainerDimensions(rootRef)
  const columns = width < 600 ? 1 : width < 800 ? 2 : 3
  const [activeLoader, setActiveLoader] = useState(slugify(loaders[0].name))
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
    setActiveLoader(slugify(loader.name))
  }

  return (
    <div className="loader_selection" ref={rootRef}>
      <FilteredGrid 
        items={loaders}
        columns={columns}
        searchPlaceholder="Search loaders"
        noMatchElement={(<p className="no-results">No matching loaders</p>)}
        matchFunction={(searchText: string, loader: LoaderType) => {
          return searchText === '' || 
          loader.name.toLowerCase().includes(searchText.toLowerCase())
        }}
        renderFunction={(loader: LoaderType) => {
          const loaderLink = slugify(loader.name)

          if (removeActive) {
            const isDupe = removeActive ? slugify(loader.name) === activeLoader : false
            if (isDupe) {
              return null
            }
          }
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