// @flow

import React, { useRef, useState, useEffect } from 'react';

import ScrollBox from './../../components/scrollBox'
import Button from './../../components/button'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { capitaliseAll } from './../../helpers'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';
import markup from 'react-syntax-highlighter/dist/cjs/languages/prism/markup';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';

import './codeBlock.scss';

SyntaxHighlighter.registerLanguage('html', markup);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('scss', scss);

export default function CodeContainer({language, code} : {language: string, code: string}) {
  const textAreaRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false)
  }, [code])

  return (
  <div className="code_container">
    <div className="code_actions">
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <CopyToClipboard
            text={code}
            onCopy={() => setCopied(true)}>
          <Button type="primary">Copy {capitaliseAll(language)}</Button>
        </CopyToClipboard>
        {copied && <p className="copy_success text" style={{margin: 0, paddingLeft: '0.5em'}}>Copied!</p>}
      </div>
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