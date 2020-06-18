import React from 'react';
import Tabs from '../tabs';
import hollowBox from '../../loaders/individual/hollow_box'
import { unslugify, capitaliseAll } from './../../helpers'

export default {
  title: 'Tabs',
  component: Tabs,
};

export const WithContent = () => {
  return (
    <Tabs tabs={Object.keys(hollowBox.code).map(id => {
      return {
        id: id,
        name: capitaliseAll(unslugify(id)),
        content: hollowBox.code[id]
      }
    })}/>
  )
};