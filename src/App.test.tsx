import React from 'react';
import {shallow} from 'enzyme';
import {App} from './App';

test('Renders app component', () => {
  const app = shallow(<App />);
  expect(app).toHaveLength(1);
});
