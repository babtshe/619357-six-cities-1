import {SET_CITY, SET_OFFERS} from './types';

export const setCity = (city) => ({
  type: SET_CITY,
  payload: city,
});

export const setOffers = (placesOffers) => ({
  type: SET_OFFERS,
  payload: placesOffers,
});

