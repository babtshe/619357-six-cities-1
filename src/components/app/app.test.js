import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {App, mapDispatchToProps} from './app';
import {SET_CITY} from '../../redux/types';

jest.mock(`leaflet`);
const mockCity = {name: `test`, location: [0, 0]};

it(`App should render good`, ()=>{
  const tree = renderer
  .create(<MemoryRouter>
    <App
      setCity = {()=>{}}
      cities = {[mockCity]}
      currentCity = {mockCity}
      offers = {[]}
      checkAuthStatus = {()=>{}}
      userData = {{}}
      isAuthorized = {false}
    />
  </MemoryRouter>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`should change current city`, () => {
  expect(mapDispatchToProps.setCity()).toEqual({type: SET_CITY});
});
