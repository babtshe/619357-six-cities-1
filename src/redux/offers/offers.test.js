import reducer from './offers';
import {SET_OFFERS} from '../types';

describe(`Reducer should be ok`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      offers: [],
      reviews: [],
    });
  });

  it(`Reducer should set offers with given value`, () => {
    expect(reducer({
      offers: [],
    }, {
      type: SET_OFFERS,
      payload: [`test`],
    })).toEqual({
      offers: [`test`],
    });
  });
});
