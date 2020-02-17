import React from 'react';
import SearchOption from './SearchOption.js';
import renderer from 'react-test-renderer';

it(' SearchOption renders correctly', () => {
  const tree = renderer
    .create(< SearchOption />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});