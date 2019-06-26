import React from 'react';
import renderer from 'react-test-renderer';
import MainEmpty from './main-empty';

it(`MainEmpty should render correctly`, ()=>{
  const tree = renderer
  .create(
      <MainEmpty
        cityName={`test`}
      />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
