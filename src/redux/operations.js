import {setOffers, setUserData, setAuthStatus, setReviewsData} from './actions';
import {offersAdapter, reviewsAdapter} from './adapter';
const OFFERS_REQUEST = `/hotels`;
const LOGIN_REQUEST = `/login`;
const REVIEWS_REQUEST = `/comments`;
const STATUS_OK = 200;

const fetchOffers = (dispatch, _, api) => {
  return api.get(OFFERS_REQUEST)
  .then((response) => {
    return dispatch(setOffers(offersAdapter(response.data)));
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

const fetchReviews = (offerId) => (dispatch, _, api) => {
  return api.get(`${REVIEWS_REQUEST}/${offerId}`)
  .then((response) => {
    if (response.status === STATUS_OK && response.data) {
      return dispatch(setReviewsData(reviewsAdapter(response.data), offerId));
    }
    return null;
  });
};

export {fetchOffers, loginUser, fetchUserData, fetchReviews};
