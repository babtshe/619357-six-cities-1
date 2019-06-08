import {offers} from '../mocks/offers';
import {cities} from '../mocks/cities';
import {SET_CITY, SET_OFFERS} from './types';

const initialState = Object.freeze({
  city: {
    name: `Amsterdam`,
    location: [52.38333, 4.9]
  },
  cities,
  offers,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY: return Object.assign({}, state, {
      city: action.payload,
    });
    case SET_OFFERS: return Object.assign({}, state, {
      offers: action.payload
    });
  }
  return state;
};

export {reducer};
