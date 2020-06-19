// @flow

import React from 'react';
import {
  useHistory
} from "react-router-dom";

type Props = {
  url: string
}

export default function Redirect({
  url
} : Props) {
  const history = useHistory();
  history.push(url)
  return (<div/>)
}