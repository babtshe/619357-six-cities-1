import {SET_CITY, SET_OFFERS} from './types';

const ActionCreator = {
  setCity: (city) => ({
    type: SET_CITY,
    payload: city,
  }),
  setOffers: (placesOffers) => ({
    type: SET_OFFERS,
    payload: placesOffers,
  }),
};

export {ActionCreator};
