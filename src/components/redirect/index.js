// @flow

import React from 'react';
import {
  useHistory
} from "react-router-dom";
import PropTypes from 'prop-types';

export default function Redirect({url} : {url: string}) {
  const history = useHistory();
  history.push(url)
  return (<div/>)
}

Redirect.propTypes = {
  url: PropTypes.string
}