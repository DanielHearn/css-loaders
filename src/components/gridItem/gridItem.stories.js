import React from 'react';
import GridItem from './../gridItem';
import Loader from './../loader'
import hollowBox from './../../loaders/individual/hollow_box'

export default {
  title: 'GridItem',
  component: GridItem,
};

export const WithContent = () => <GridItem><p>Content</p></GridItem>;

export const WithComplexContent = () => <GridItem>
  <div style={{backgroundColor: hollowBox.color, display: 'flex', justifyContent: 'center', padding: '4em'}}>
    <Loader html={hollowBox.code.html} css={hollowBox.code.css}/>
  </div>
</GridItem>;