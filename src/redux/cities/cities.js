import {SET_CITY} from '../types';
const initialState = {
  city: {
    name: `Amsterdam`,
    location: [52.38333, 4.9],
    zoom: 12,
  },
  cities: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY: return Object.assign({}, state, {
      city: action.payload,
    });
  }
  return state;
};

export default reducer;
