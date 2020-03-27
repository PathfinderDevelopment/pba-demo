import React from 'react';
import {shallow} from 'enzyme';

import {AlertItem} from './AlertItem';

test('Checkbox state changes when clicking container', () => {
  const wrapped = shallow(<AlertItem />);

  // check that checkbox is unchecked first, then click
  expect(wrapped.find('input').getElement().props.checked).toEqual(false);

  wrapped.simulate('click');
  expect(wrapped.find('input').getElement().props.checked).toEqual(true);
});
