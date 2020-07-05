import React from 'react';
import InputBox from './../inputBox';
import { TiUser } from "react-icons/ti";

export default {
  title: 'InputBox',
  component: InputBox,
};

export const WithBasicProps = () => <InputBox inputPlaceholder="Placeholder text" onChange={text => console.log(text)}/>;

export const WithIcon= () => <InputBox inputPlaceholder="Placeholder text" icon={<TiUser />} onChange={text => console.log(text)}/>;

export const WithClearButton = () => <InputBox inputPlaceholder="Placeholder text" clearButton={true} onChange={text => console.log(text)}/>;

export const WithAllProps = () => <InputBox inputPlaceholder="Placeholder text" icon={<TiUser />} clearButton={true} onChange={text => console.log(text)}/>;