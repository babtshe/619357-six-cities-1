import {reducer} from './reducers';
import {ActionType} from './types';
import {offers} from '../mocks/offers';
import {cities} from '../mocks/cities';

describe(`Reducer should be ok`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: {
        name: `Amsterdam`,
        location: [52.38333, 4.9]
      },
      offers,
      cities,
    });
  });

  it(`Reducer should set sity with given value`, () => {
    expect(reducer({
      city: `test`,
      offers,
      cities,
    }, {
      type: ActionType.SET_CITY,
      payload: {
        name: `test`,
        location: [0, 0],
      },
    })).toEqual({
      city: {
        name: `test`,
        location: [0, 0],
      },
      offers,
      cities,
    });
  });

  it(`Reducer should set offers with given value`, () => {
    expect(reducer({
      city: ``,
      offers,
    }, {
      type: ActionType.SET_OFFERS,
      payload: [`test`],
    })).toEqual({
      city: ``,
      offers: [`test`],
    });
  });
});
