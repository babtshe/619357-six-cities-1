import {createSelector} from 'reselect';

const MAX_CITIES = 6;

export const getOffers = (state) => {
  return state.offers;
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
  return state.city;
};

export const getCurrentCityOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, currentCity) => offers.filter((offer) => offer.city.name === currentCity.name)
);
