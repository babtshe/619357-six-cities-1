import MockAdapter from 'axios-mock-adapter';
import {fetchOffers} from './operations';
import {configureAPI} from '../api';
import {SET_OFFERS} from './types';
import {offersAdapter} from './adapter';

it(`network request should work correctly`, () => {
  const dispatch = jest.fn();
  const api = configureAPI();
  const apiMock = new MockAdapter(api);
  const mockData = [{
    city: {
      name: `test`,
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      }
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    images: [],
    [`preview_image`]: `test`,
    title: `test`,
    [`is_favorite`]: false,
    [`is_premium`]: false,
    rating: 0,
    host: {
      [`avatar_url`]: `test`,
      id: 1,
      name: `test`,
      [`is_pro`]: false,
    },
  }];

  apiMock.onGet(`/hotels`)
  .reply(200, mockData);

  fetchOffers(dispatch, () => {}, api)
  .then(() => {
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: SET_OFFERS,
      payload: offersAdapter(mockData),
    });
  });
});
