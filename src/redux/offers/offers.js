import {SET_OFFERS, SET_REVIEWS_DATA, SET_ACTIVE_LOCATION, UPDATE_OFFER} from '../types';
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
    case UPDATE_OFFER: return Object.assign({}, state, {
      offers: state.offers.map((offer) => (offer.id === action.payload.id) ?
        action.payload.data[0] : offer),
    });
  }
  return state;
};

export default reducer;
