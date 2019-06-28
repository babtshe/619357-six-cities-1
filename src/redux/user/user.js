import {SET_USER_DATA, SET_AUTH_STATUS, SET_AUTH_REQUIRED_STATUS, SET_BOOKMARKS} from '../types';
const initialState = {
  isAuthorizationRequired: false,
  isAuthorized: false,
  user: {},
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: return Object.assign({}, state, {
      user: action.payload,
    });
    case SET_AUTH_REQUIRED_STATUS: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload,
    });
    case SET_AUTH_STATUS: return Object.assign({}, state, {
      isAuthorized: action.payload,
    });
    case SET_BOOKMARKS: return Object.assign({}, state, {
      bookmarks: action.payload,
    });
  }
  return state;
};

export default reducer;
