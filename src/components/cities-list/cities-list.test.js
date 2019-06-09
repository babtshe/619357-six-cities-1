import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list';

const mockCity = {name: `test`, location: [0, 0]};
it(`CitiesList should render correctly`, ()=>{
  const tree = renderer
  .create(
      <CitiesList
        setCity = {()=>{}}
        cities = {[mockCity]}
        currentCity = {mockCity}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
