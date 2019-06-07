import {ActionCreator, reducer, ActionType} from "./reducer";
import {offers} from '../mocks/offers';
import {cities} from '../mocks/cities';

describe(`ActionCreator should be ok`, () => {
  it(`ActionCreator should set city value`, () => {
    expect(ActionCreator.setCity(`Test`)).toEqual({
      type: ActionType.SET_CITY,
      payload: `Test`,
    });
  });
  it(`ActionCreator should set offers value`, () => {
    expect(ActionCreator.setOffers({test: `test`})).toEqual({
      type: ActionType.SET_OFFERS,
      payload: {test: `test`},
    });
  });
});

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
