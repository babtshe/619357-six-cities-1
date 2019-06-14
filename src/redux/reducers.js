import {SET_CITY, SET_OFFERS} from './types';
import {combineReducers} from 'redux';
import cities from './cities/cities';
import offers from './offers/offers';
import initialState from './initial-state';
import NameSpace from './name-space';

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

export default combineReducers({
  [NameSpace.OFFERS]: offers,
  [NameSpace.CITIES]: cities,
});
