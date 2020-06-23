import React from 'react';
import ScrollBox from '../scrollBox';

export default {
  title: 'ScrollBox',
  component: ScrollBox,
};

const content = (
<div style={{width: '200vw', height: '200%'}}>
  <p>TextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontent</p>
</div>
)

export const Default = () => <ScrollBox>{content}</ScrollBox>;

export const WithX = () => <ScrollBox x={true}>{content}</ScrollBox>;

export const WithY = () => <ScrollBox y={true}>{content}</ScrollBox>;

export const WithXandY = () => <ScrollBox x={true} y={true}>
{Array.apply(null, Array(50)).map(() => <p>TextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontent</p>)}
</ScrollBox>;