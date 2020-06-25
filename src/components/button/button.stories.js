import React from 'react';
import Button from '../button';

export default {
  title: 'Button',
  component: Button,
};

export const WithContent = () => <Button>Button text</Button>;

export const Primary = () => <Button type="primary">Button text</Button>;