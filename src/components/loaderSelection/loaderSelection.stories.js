import React from 'react';
import LoaderSelection from '../loaderSelection';

export default {
  title: 'LoaderSelection',
  component: LoaderSelection,
};

export const Element = () => <LoaderSelection/>;

export const WithRemoveActive = () => <LoaderSelection removeActive={true}/>;