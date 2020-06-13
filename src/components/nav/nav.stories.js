import React from 'react';
import Nav from './../nav';

export default {
  title: 'Nav',
  component: Nav,
};

export const Empty = () => <Nav></Nav>;

export const WithContent = () => <Nav><p>Content</p></Nav>;