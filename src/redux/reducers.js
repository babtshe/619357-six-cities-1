import {SET_CITY, SET_OFFERS} from './types';
import initialState from './initial-state';

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
