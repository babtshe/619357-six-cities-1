import {setOffers} from './actions';
import adapter from './adapter';
const OFFERS_REQUEST = `/hotels`;

const fetchOffers = (dispatch, _, api) => {
  return api.get(OFFERS_REQUEST)
  .then((response) => {
    dispatch(setOffers(adapter(response.data)));
  });
};

export {fetchOffers};
