import {setOffers, setUserData, setAuthStatus, setReviewsData, updateOffer} from './actions';
import {offersAdapter, reviewsAdapter} from './adapter';
const Request = {
  OFFERS: `/hotels`,
  LOGIN: `/login`,
  REVIEWS: `/comments`,
  BOOKMARK: `/favorite`,
};
const Status = {
  OK: 200,
  FORBIDDEN: 403,
};

const fetchOffers = (dispatch, _, api) => {
  return api.get(Request.OFFERS)
  .then((response) => {
    return dispatch(setOffers(offersAdapter(response.data)));
  });
};

const loginUser = (email, password) => (dispatch, _, api) => {
  return api.post(Request.LOGIN, {email, password})
  .then((response) => {
    if (response.status === Status.OK) {
      dispatch(setAuthStatus(true));
      return dispatch(setUserData(response.data));
    }
    return null;
  });
};

const fetchUserData = () => (dispatch, _, api) => {
  return api.get(Request.LOGIN)
  .then((response) => {
    if (response.status === Status.OK && response.data) {
      dispatch(setAuthStatus(true));
      return dispatch(setUserData(response.data));
    }
    return null;
  });
};

const fetchReviews = (offerId) => (dispatch, _, api) => {
  return api.get(`${Request.REVIEWS}/${offerId}`)
  .then((response) => {
    if (response.status === Status.OK && response.data) {
      return dispatch(setReviewsData(reviewsAdapter(response.data)));
    }
    return null;
  });
};

const sendReview = (offerId, review) => (dispatch, _, api) => {
  return api.post(`${Request.REVIEWS}/${offerId}`, review)
  .then((response) => {
    if (response.status === Status.OK && response.data) {
      return dispatch(setReviewsData(reviewsAdapter(response.data), offerId));
    } else if (response.status === Status.FORBIDDEN) {
      return dispatch(setAuthStatus(false));
    }
    return null;
  });
};

const sendBookmarkedStatus = (offerId, status) => (dispatch, _, api) => {
  return api.post(`${Request.BOOKMARK}/${offerId}/${status}`)
  .then((response) => {
    if (response.status === Status.OK && response.data) {
      return dispatch(updateOffer(offersAdapter([response.data]), offerId));
    }
    return null;
  });
};

export {fetchOffers, loginUser, fetchUserData, fetchReviews, sendReview, sendBookmarkedStatus};
