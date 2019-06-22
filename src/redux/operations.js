import {setOffers, setUserData, setAuthStatus} from './actions';
import adapter from './adapter';
const OFFERS_REQUEST = `/hotels`;
const LOGIN_REQUEST = `/login`;
const STATUS_OK = 200;

const fetchOffers = (dispatch, _, api) => {
  return api.get(OFFERS_REQUEST)
  .then((response) => {
    return dispatch(setOffers(adapter(response.data)));
  });
};

const loginUser = (email, password) => (dispatch, _, api) => {
  return api.post(LOGIN_REQUEST, {email, password})
  .then((response) => {
    if (response.status === STATUS_OK) {
      dispatch(setAuthStatus(true));
      return dispatch(setUserData(response.data));
    }
    return null;
  });
};

const fetchUserData = () => (dispatch, _, api) => {
  return api.get(LOGIN_REQUEST)
  .then((response) => {
    if (response.status === STATUS_OK && response.data) {
      dispatch(setAuthStatus(true));
      return dispatch(setUserData(response.data));
    }
    return null;
  });
};

export {fetchOffers, loginUser, fetchUserData};
