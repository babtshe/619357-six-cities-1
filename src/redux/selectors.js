import {createSelector} from 'reselect';
import NameSpace from './name-space';

const MAX_CITIES = 6;
const MAX_REVIEWS = 10;

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

export const getOfferById = (state, props) => {
  return state[NameSpace.OFFERS].offers.filter((offer)=>offer.id === +props.offerId)[0];
};

export const getReviews = (state) => {
  const getTimestamp = (date) => (new Date(date)).valueOf();
  return state[NameSpace.OFFERS].reviews
  .sort((a, b) => getTimestamp(a.date) > getTimestamp(b.date))
  .slice(0, MAX_REVIEWS);
};

export const getNearestOffers = (state, props) => {
  const getDistanceByCoordinate = (firstLocation, secondLocation) => {
    // https://en.wikipedia.org/wiki/Haversine_formula
    const EARTH_RADIUS = 6371;
    const [lat1, lon1] = firstLocation;
    const [lat2, lon2] = secondLocation;
    const p = Math.PI / 180;
    const c = Math.cos;
    const a = 0.5 - c((lat2 - lat1) * p) / 2 +
    c(lat1 * p) * c(lat2 * p) *
    (1 - c((lon2 - lon1) * p)) / 2;
    return EARTH_RADIUS * 2 * Math.asin(Math.sqrt(a));
  };
  const offers = getOffers(state);
  const initialPlace = offers.find((offer) => offer.id === +props.offerId);
  return offers.sort((a, b) => (
    getDistanceByCoordinate(initialPlace.location, a.location) -
    getDistanceByCoordinate(initialPlace.location, b.location)
  ))
  .slice(1, 4);
};

export const getActiveLocation = (state) => {
  return state[NameSpace.OFFERS].activeLocation;
};
