import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

jest.mock(`leaflet`);
const mockCity = {name: `test`, location: [0, 0]};

it(`App should render good`, ()=>{
  const tree = renderer
  .create(<App
    setCity = {()=>{}}
    cities = {[mockCity]}
    currentCity = {mockCity}
    offers = {[]}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
