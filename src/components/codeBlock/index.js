// @flow

import React, { useRef } from 'react';
import Button from './../../components/button'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { capitaliseAll } from './../../helpers'
import { FaRegClipboard } from "react-icons/fa";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { toast } from 'react-toastify';
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

  return (
  <div className="code_container">
    <div className="code_actions">
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <CopyToClipboard
            text={code}
            onCopy={() => {
              toast.clearWaitingQueue();
              toast(`Copied ${capitaliseAll(language)}`);
            }}>
          <Button type="primary" title={`Copy ${capitaliseAll(language)}`}><FaRegClipboard/></Button>
        </CopyToClipboard>
      </div>
    </div>
    <div className="content_container" ref={textAreaRef}>
      <SyntaxHighlighter language={language} style={prism} className="code_block">
        {code}
      </SyntaxHighlighter>
    </div>
  </div>
  )
}