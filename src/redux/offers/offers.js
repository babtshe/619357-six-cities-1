import {SET_OFFERS, SET_REVIEWS_DATA, SET_ACTIVE_LOCATION} from '../types';
const initialState = {
  offers: [],
  reviews: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OFFERS: return Object.assign({}, state, {
      offers: action.payload
    });
    case SET_REVIEWS_DATA: return Object.assign({}, state, {
      reviews: action.payload
    });
    case SET_ACTIVE_LOCATION: return Object.assign({}, state, {
      activeLocation: action.payload,
    });
  }
  return state;
};

export default reducer;
