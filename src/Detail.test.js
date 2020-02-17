import React from 'react';
import Detail from './Detail.js';
import renderer from 'react-test-renderer';

it(' Detail renders correctly', () => {
  const tree = renderer
    .create(< Detail />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});