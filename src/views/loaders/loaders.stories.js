import React from 'react';
import Loaders from '../loaders';
import {
  Route
} from "react-router-dom";

export default {
  title: 'Loaders',
  component: Loaders,
};

export const WithContent = () => <Loaders/>;