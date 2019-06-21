import {SET_CITY, SET_OFFERS, SET_USER_DATA, SET_AUTH_STATUS, SET_AUTH_REQUIRED_STATUS} from './types';

export const setCity = (city) => ({
  type: SET_CITY,
  payload: city,
});

export const setOffers = (placesOffers) => ({
  type: SET_OFFERS,
  payload: placesOffers,
});

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  payload: data,
});

export const setAuthStatus = (status) => ({
  type: SET_AUTH_STATUS,
  payload: status,
});

export const setAuthRequiredStatus = (status) => ({
  type: SET_AUTH_REQUIRED_STATUS,
  payload: status,
});
