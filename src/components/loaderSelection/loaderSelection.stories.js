import React from 'react';
import LoaderSelection from '../loaderSelection';
import { createMemoryHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import { addDecorator } from '@storybook/react';

const history = createMemoryHistory({ initialEntries: ['/'] })

addDecorator(story => (
  <Router history={history}>
    <Route path="/" component={() => story()} />
  </Router>
))
export default {
  title: 'LoaderSelection',
  component: LoaderSelection,
};

export const Element = () => <LoaderSelection/>;