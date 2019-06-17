import {reducer} from './reducers';
import {SET_CITY, SET_OFFERS} from './types';

describe(`Reducer should be ok`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: {
        name: `Amsterdam`,
        location: [52.38333, 4.9],
        zoom: 12
      },
      offers: [],
      cities: [],
    });
  });

  it(`Reducer should set sity with given value`, () => {
    expect(reducer({
      city: `test`,
      offers: [],
      cities: [],
    }, {
      type: SET_CITY,
      payload: {
        name: `test`,
        location: [0, 0],
      },
    })).toEqual({
      city: {
        name: `test`,
        location: [0, 0],
      },
      offers: [],
      cities: [],
    });
  });

  it(`Reducer should set offers with given value`, () => {
    expect(reducer({
      city: ``,
      offers: [],
    }, {
      type: SET_OFFERS,
      payload: [`test`],
    })).toEqual({
      city: ``,
      offers: [`test`],
    });
  });
});
