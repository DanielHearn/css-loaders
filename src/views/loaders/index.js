// @flow

import React, {useRef} from 'react';
import {
  useRouteMatch,
  Redirect 
} from "react-router-dom";

import Loader from './../../components/loader'
import Tabs from './../../components/tabs'
import ScrollBox from './../../components/scrollBox'
import Button from './../../components/button'
import MobileNav from './../../components/mobileNav'
import LoaderSelection from './../../components/loaderSelection'
import { slugify, unslugify, capitaliseWords, capitaliseAll, copyToClipboard } from './../../helpers'
import { useTitle } from './../../hooks'
import loaders from './../../loaders'
import { titleRoot, mediaQueries } from './../../constants'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import { useMedia } from 'react-media';

import markup from 'react-syntax-highlighter/dist/esm/languages/prism/markup';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';

import { TiMediaPlay, TiCode, TiThSmall } from "react-icons/ti";

SyntaxHighlighter.registerLanguage('html', markup);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('scss', scss);

function CodeContainer({language, code}) {
  const textAreaRef = useRef(null);

  function copyCode(e) {
    copyToClipboard(textAreaRef.current)
  };

  return (
  <div className="code_container">
    <div className="code_actions">
      <Button type="primary" onClick={copyCode}>Copy {language}</Button>
    </div>
    <div className="content_container" ref={textAreaRef}>
      <ScrollBox y={true} x={true}>
        <SyntaxHighlighter language={language} style={prism} className="code_block">
          {code}
        </SyntaxHighlighter>
      </ScrollBox>
    </div>
  </div>
  )
}

export default function Loaders() {
  const loaderMatch = useRouteMatch('/loaders/:loaderName');
  let loaderName = ''
  if (loaderMatch) {
    loaderName = loaderMatch.params.loaderName;
  }
  useTitle(`${capitaliseWords(unslugify(loaderName))} - ${titleRoot}`)
  const queryMatches = useMedia({ queries: mediaQueries });

  if(loaderName === null || loaderName === '') {
    return (
      <Redirect to={`/loaders/${slugify(loaders[0].name)}`}/>
    );
  } else {
    const storedLoader = loaders.filter(loader => 
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
            content: <CodeContainer language={language} code={storedLoader.code[language]}/>
          }
        )
      }

      if (queryMatches.small) {
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
                          <LoaderSelection/>
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