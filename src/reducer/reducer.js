import {offers} from '../mocks/offers';
import {cities} from '../mocks/cities';

const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_OFFERS: `SET_OFFERS`
};

const initialState = Object.freeze({
  city: {
    name: `Amsterdam`,
    location: [52.38333, 4.9]
  },
  cities,
  offers,
});

const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
  setOffers: (placesOffers) => ({
    type: ActionType.SET_OFFERS,
    payload: placesOffers,
  }),
};

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

export {ActionCreator, reducer, ActionType};
