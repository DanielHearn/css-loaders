import React from 'react';
import Tabs from '../tabs';
import hollowBox from '../../loaders/individual/hollow_box'

export default {
  title: 'Tabs',
  component: Tabs,
};

export const WithContent = () => {
  return (
    <Tabs tabs={Object.keys(hollowBox.code).map(id => {
      return {
        id: id,
        content: hollowBox.code[id]
      }
    })}/>
  )
};