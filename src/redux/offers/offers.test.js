import reducer from './offers';
import {SET_OFFERS, SET_REVIEWS_DATA, SET_ACTIVE_LOCATION, UPDATE_OFFER} from '../types';

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
  it(`Reducer should set reviews with given value`, () => {
    expect(reducer({
      offers: [],
    }, {
      type: SET_REVIEWS_DATA,
      payload: [`test`],
    })).toEqual({
      offers: [],
      reviews: [`test`],
    });
  });
  it(`Reducer should set active location with given value`, () => {
    expect(reducer({
      offers: [],
    }, {
      type: SET_ACTIVE_LOCATION,
      payload: [`test`],
    })).toEqual({
      offers: [],
      activeLocation: [`test`],
    });
  });
  it(`Reducer should update offers with given value`, () => {
    expect(reducer({
      offers: [{id: 1}],
    }, {
      type: UPDATE_OFFER,
      payload: {
        id: 1,
        data: [`test`],
      },
    })).toEqual({
      offers: [`test`],
    });
  });
});
