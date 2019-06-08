import {ActionCreator} from './actions';
import {ActionType} from './types';

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
