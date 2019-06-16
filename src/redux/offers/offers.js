import {SET_OFFERS} from '../types';
const initialState = {
  offers: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OFFERS: return Object.assign({}, state, {
      offers: action.payload
    });
  }
  return state;
};

export default reducer;
