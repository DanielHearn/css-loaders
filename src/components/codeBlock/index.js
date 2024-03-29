// @flow

import React, { useRef } from 'react';
import Button from './../../components/button'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { capitaliseAll } from './../../helpers'
import { FaRegClipboard, FaExternalLinkAlt } from "react-icons/fa";
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

export default function CodeContainer({language, code, link} : {language: string, code: string, link?: string}) {
  const textAreaRef = useRef(null);

  return (
  <div className="code_container">
    <div className="code_actions">
      <CopyToClipboard
          text={code}
          onCopy={() => {
            toast.clearWaitingQueue();
            toast(`Copied ${capitaliseAll(language)}`);
          }}>
        <Button type="primary" title={`Copy ${capitaliseAll(language)}`}><FaRegClipboard/></Button>
      </CopyToClipboard>
      {link && <a href={link} target='_blank' rel="noopener noreferrer" className='code_codepen'><Button type="primary" title="Open CodePen Editor" on>CodePen <FaExternalLinkAlt/></Button></a>}
    </div>
    <div className="content_container" ref={textAreaRef}>
      <SyntaxHighlighter language={language} style={prism} className="code_block">
        {code}
      </SyntaxHighlighter>
    </div>
  </div>
  )
}