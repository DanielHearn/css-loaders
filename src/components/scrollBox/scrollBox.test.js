import React from 'react';
import ScrollBox from '../scrollBox';
import { shallow } from 'enzyme';

test('ScrollBox content', () => {
  const scrollbox = shallow(
  <ScrollBox x={true} y={true}>
    {Array.apply(null, Array(50)).map(() => <p>TextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontentTextcontent</p>)}
  </ScrollBox>);
  expect(scrollbox.find('p').length).toBe(50);
});