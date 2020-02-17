import React from 'react';
import List from './List.js';
import renderer from 'react-test-renderer';

it(' List renders correctly', () => {
  const tree = renderer
    .create(< List />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});