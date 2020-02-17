import React from 'react';
import Home from './Home.js';
import renderer from 'react-test-renderer';

it(' Home renders correctly', () => {
  const tree = renderer
    .create(< Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});