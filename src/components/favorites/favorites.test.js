import React from 'react';
import renderer from 'react-test-renderer';
import Favorites from './favorites';

it(`Favorites should render correctly`, ()=>{
  const tree = renderer
  .create(
      <Favorites/>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
