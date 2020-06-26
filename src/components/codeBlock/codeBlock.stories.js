import React from 'react';
import CodeBlock from '../codeBlock';
import squareLoader from './../../loaders/individual/square'

export default {
  title: 'CodeBlock',
  component: CodeBlock,
};

export const WithContent = () => <CodeBlock language={'scss'} code={squareLoader.code['scss']}/>;