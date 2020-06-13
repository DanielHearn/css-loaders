import React from 'react';
import InputBox from './../inputBox';

export default {
  title: 'InputBox',
  component: InputBox,
};

export const WithProps = () => <InputBox inputPlaceholder="Placeholder text" searchCallback={text => console.log(text)}/>;