import React from 'react';
import renderer from 'react-test-renderer';
import Sorting from './sorting';

it(`Sorting should render correctly`, ()=>{
  const mockOptions = [{
    name: `test`
  }];
  const tree = renderer
  .create(
      <Sorting
        isOpened = {true}
        options = {mockOptions}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
