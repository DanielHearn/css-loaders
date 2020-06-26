import React from 'react';
import CodeBlock from '../codeBlock';
import squareLoader from './../../loaders/individual/square'
import { shallow, mount } from 'enzyme';

export default {
  title: 'CodeBlock',
  component: CodeBlock,
};

test('CodeBlock content', () => {
  const codeBlock = mount(<CodeBlock language={'scss'} code={squareLoader.code['scss']}/>);
  expect(codeBlock.find('.content_container pre').text()).toBe(squareLoader.code['scss']);
});