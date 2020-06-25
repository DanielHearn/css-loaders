import React from 'react';
import Loader from './../loader';
import hollowBox from './../../loaders/individual/hollow_box'

export default {
  title: 'Loader',
  component: Loader,
};

export const WithContent = () => <Loader html={hollowBox.code.html} css={hollowBox.code.css}/>;