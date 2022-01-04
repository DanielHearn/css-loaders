// @flow

import React from 'react';
import type { Node } from 'react'
import {
  useRouteMatch,
  Redirect 
} from "react-router-dom";
import { ScreenTypes } from '../../store/actions'

import Loader from './../../components/loader'
import Tabs from './../../components/tabs'
import ScrollBox from './../../components/scrollBox'
import MobileNav from './../../components/mobileNav'
import LoaderSelection from './../../components/loaderSelection'
import CodeBlock from './../../components/codeBlock'
import { slugify, unslugify, capitaliseWords, capitaliseAll } from './../../helpers'
import { useTitle } from './../../hooks'
import loaders from './../../loaders'
import { titleRoot } from './../../constants'
import type { Loader as LoaderType } from './../../loaders'

import { TiMediaPlay, TiCode, TiThSmall } from "react-icons/ti";

type Props = {
  screen: $Values<typeof ScreenTypes>
}

export default function Loaders({screen = ScreenTypes.LARGE_SCREEN} : Props) : Node {
  const loaderMatch = useRouteMatch('/:loaderName');
  let loaderName = 'square'
  if (loaderMatch) {
    loaderName = loaderMatch.params.loaderName;
  }
  useTitle(`${capitaliseWords(unslugify(loaderName))} - ${titleRoot}`)
  const smallScreen = screen === ScreenTypes.SMALL_SCREEN

  if(loaderName === null || loaderName === '') {
    return (
      <Redirect to={`/${slugify(loaders[0].name)}`}/>
    );
  } else {
    const storedLoader = loaders.filter((loader: LoaderType) : boolean => 
      loaderName === slugify(loader.name)
    )[0]

    if (storedLoader) {
      let codeTabs = [];
      const languages = Object.keys(storedLoader.code)
      for (const language of languages) {
        codeTabs.push(
          {
            id: `${slugify(storedLoader.name)}_${language}`,
            name: capitaliseAll(unslugify(language)),
            content: <CodeBlock language={language} code={storedLoader.code[language]}/>
          }
        )
      }

      if (smallScreen) {
        const mobileNavTabs = [
          {
            id: `${slugify(storedLoader.name)}_animation`,
            name: 'Animation',
            icon: <TiMediaPlay/>,
            content: (
              <div className="row" style={{position: 'relative', height: '100%'}}>
                <h1 className="heading text-center text-white" style={{position: 'absolute', top: '20%', width: '100%'}}>{storedLoader.name}</h1>
                <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', background: storedLoader.color}}>
                  <Loader html={storedLoader.code.html} css={storedLoader.code.css}/>
                </div>
              </div>
            )
          },
          {
            id: `${slugify(storedLoader.name)}_code`,
            name: 'Code',
            icon: <TiCode/>,
            content: (
              <Tabs tabs={codeTabs}/>
            )
          },
          {
            id: `${slugify(storedLoader.name)}_library`,
            name: 'Library',
            icon: <TiThSmall/>,
            content: (
              <div className="row" style={{height: '100%'}}>
                <div className="content_container">
                    <ScrollBox y={true}>
                      <div className="content">
                        <div style={{marginBottom: '4em'}}>
                          <LoaderSelection initialActiveLoader={loaderName} removeActive={true}/>
                        </div>
                      </div>
                    </ScrollBox>
                </div>
              </div>
            )
          }
        ]

        return (
          <div className="row" style={{height: '90%'}}>
            <MobileNav tabs={mobileNavTabs}/>
          </div>
        )
      } else {
        return (
          <div className="row" style={{height: '100%'}}>
            <div className="column" style={{width: '50%', height: '100%'}}>
              <div className="row" style={{position: 'relative', height: '50%'}}>
                <h1 className="heading text-center text-white" style={{position: 'absolute', top: '20%', width: '100%'}}>{storedLoader.name}</h1>
                <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', background: storedLoader.color}}>
                  <Loader html={storedLoader.code.html} css={storedLoader.code.css}/>
                </div>
              </div>
              <div className="row" style={{height: '50%'}}>
                <div className="content_container">
                    <ScrollBox y={true}>
                      <div className="content">
                        <div style={{marginBottom: '4em'}}>
                          <LoaderSelection/>
                        </div>
                      </div>
                    </ScrollBox>
                </div>
              </div>
            </div>
            <div className="column" style={{width: '50%'}}>
              <Tabs tabs={codeTabs}/>
            </div>
          </div>
        )
      }
    } else {
      return (
        <Redirect url="/"/>
      );
    }
  }
}