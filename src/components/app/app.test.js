import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

jest.mock(`leaflet`, () => {
  return {
    icon() {},
    map() {
      return {setView() {}};
    },
    tileLayer() {
      return {addTo() {}};
    },
    marker() {
      return {addTo() {}};
    },
  };
});

it(`App should render good`, ()=>{
  const tree = renderer
  .create(<App />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
