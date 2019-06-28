import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Favorites} from './favorites';

it(`Favorites should render correctly`, ()=>{
  const renderer = new ShallowRenderer();
  const tree = renderer
  .render(
      <Favorites/>
  );

  expect(tree).toMatchSnapshot();
});
