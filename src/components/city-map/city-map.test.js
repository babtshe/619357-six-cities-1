import React from 'react';
import renderer from 'react-test-renderer';
import {CityMap} from './city-map';

it(`CityMap should render correctly`, ()=>{
  const mockLocations = [];
  const tree = renderer
  .create(
      <CityMap
        locations={mockLocations}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
