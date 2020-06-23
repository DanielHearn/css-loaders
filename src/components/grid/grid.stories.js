import React from 'react';
import Grid from './../grid';
import GridItem from './../gridItem';

export default {
  title: 'Grid',
  component: Grid,
};

export const WithContent = () => <Grid items={[
  <GridItem><p>Item 1</p></GridItem>,
  <GridItem><p>Item 2</p></GridItem>
]}/>;

export const WithContent3Columns = () => <Grid columns={3} items={[
  <GridItem><p>Item 1</p></GridItem>,
  <GridItem><p>Item 2</p></GridItem>
]}/>;