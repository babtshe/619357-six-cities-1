import React from 'react';
import renderer from 'react-test-renderer';
import CityMap from './city-map';

jest.mock(`leaflet`);

it(`CityMap should render correctly`, ()=>{
  const mockLocations = [];
  const tree = renderer
  .create(
      <CityMap
        cityLocation = {[0, 0]}
        locations = {mockLocations}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
