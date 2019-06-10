import * as ActionCreator from './actions';
import {SET_CITY, SET_OFFERS} from './types';

describe(`ActionCreator should be ok`, () => {
  it(`ActionCreator should set city value`, () => {
    expect(ActionCreator.setCity(`Test`)).toEqual({
      type: SET_CITY,
      payload: `Test`,
    });
  });
  it(`ActionCreator should set offers value`, () => {
    expect(ActionCreator.setOffers({test: `test`})).toEqual({
      type: SET_OFFERS,
      payload: {test: `test`},
    });
  });
});
