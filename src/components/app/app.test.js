import React from 'react';
import renderer from 'react-test-renderer';
import {App, mapDispatchToProps, mapStateToProps} from './app';
import {ActionType} from '../../redux/types';

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


it(`Should have maximum 6 cities`, () => {
  const initialState = {
    cities: (new Array(10)).fill(mockCity),
    offers: [],
  };

  expect(mapStateToProps(initialState).cities.length).toEqual(6);
});

it(`Should only have current city offers`, () => {
  const initialState = {
    cities: [mockCity],
    city: mockCity,
    offers: [
      {city: `test`},
      {city: `city`},
    ],
  };

  expect(mapStateToProps(initialState).offers.every((item)=>item.city === initialState.city.name)).toEqual(true);
});

it(`should change current city`, () => {
  expect(mapDispatchToProps.setCity()).toEqual({type: ActionType.SET_CITY});
});
