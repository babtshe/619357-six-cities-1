import reducer from './cities';
import {SET_CITY} from '../types';

describe(`Reducer should be ok`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: {
        name: `Amsterdam`,
        location: [52.38333, 4.9],
        zoom: 12
      },
      cities: [],
    });
  });

  it(`Reducer should set sity with given value`, () => {
    expect(reducer({
      city: `test`,
    }, {
      type: SET_CITY,
      payload: {
        name: `test`,
        location: [0, 0],
        zoom: 12,
      },
    })).toEqual({
      city: {
        name: `test`,
        location: [0, 0],
        zoom: 12,
      },
    });
  });
});
