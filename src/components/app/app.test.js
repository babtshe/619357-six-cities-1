import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

jest.mock(`leaflet`);

it(`App should render good`, ()=>{
  const tree = renderer
  .create(<App />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
