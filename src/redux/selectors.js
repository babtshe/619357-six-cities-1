import {createSelector} from 'reselect';
import NameSpace from './name-space';

const MAX_CITIES = 6;

export const getOffers = (state) => {
  return state[NameSpace.OFFERS].offers;
};

export const getCities = createSelector(
    getOffers,
    (offers) => {
      const flags = new Set();
      return offers.map((offer) => offer.city)
      .filter((item) => {
        if (flags.has(item.name) || flags.size >= MAX_CITIES) {
          return false;
        }
        flags.add(item.name);
        return true;
      });
    }
);

export const getCurrentCity = (state) => {
  return state[NameSpace.CITIES].city;
};

export const getCurrentCityOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, currentCity) => offers.filter((offer) => offer.city.name === currentCity.name)
);

export const getAuthRequiredStatus = (state) => {
  return state[NameSpace.USER].isAuthorizationRequired;
};

export const getAuthStatus = (state) => {
  return state[NameSpace.USER].isAuthorized;
};

export const getUserData = (state) => {
  return state[NameSpace.USER].user;
};
