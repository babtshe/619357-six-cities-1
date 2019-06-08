import {offers} from '../mocks/offers';
import {cities} from '../mocks/cities';
import {ActionType} from './types';

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
    case ActionType.SET_CITY: return Object.assign({}, state, {
      city: action.payload,
    });
    case ActionType.SET_OFFERS: return Object.assign({}, state, {
      offers: action.payload
    });
  }
  return state;
};

export {reducer};
