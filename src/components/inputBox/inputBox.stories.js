import React from 'react';
import InputBox from './../inputBox';
import { TiUser } from "react-icons/ti";

export default {
  title: 'InputBox',
  component: InputBox,
};

export const WithBasicProps = () => <InputBox inputPlaceholder="Placeholder text" searchCallback={text => console.log(text)}/>;

export const WithIcon= () => <InputBox inputPlaceholder="Placeholder text" icon={<TiUser />} searchCallback={text => console.log(text)}/>;

export const WithClearButton = () => <InputBox inputPlaceholder="Placeholder text" clearButton={true} searchCallback={text => console.log(text)}/>;

export const WithAllProps = () => <InputBox inputPlaceholder="Placeholder text" icon={<TiUser />} clearButton={true} searchCallback={text => console.log(text)}/>;