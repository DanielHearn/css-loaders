// @flow

import React from 'react';
import {
  useHistory
} from "react-router-dom";

export default function Redirect({url}) {
  const history = useHistory();
  history.push(url)
  return (<div/>)
}