import {ActionType} from './types';

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

export {ActionCreator};
