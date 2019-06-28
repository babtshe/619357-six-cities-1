import reducer from './user';
import {SET_USER_DATA, SET_AUTH_REQUIRED_STATUS, SET_AUTH_STATUS, SET_BOOKMARKS} from '../types';

describe(`Reducer should be ok`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      isAuthorizationRequired: false,
      isAuthorized: false,
      user: {},
    });
  });

  it(`Reducer should set user data`, () => {
    const mockPayload = {
      id: 1,
      email: `test`,
      avatarUrl: `test`,
      isPro: true,
    };
    expect(reducer({
      user: {},
    }, {
      type: SET_USER_DATA,
      payload: mockPayload,
    })).toEqual({
      user: mockPayload,
    });
  });
  it(`Reducer should set auth required status`, () => {
    expect(reducer({
      isAuthorizationRequired: false,
    }, {
      type: SET_AUTH_REQUIRED_STATUS,
      payload: true,
    })).toEqual({
      isAuthorizationRequired: true,
    });
  });
  it(`Reducer should set authorization status`, () => {
    expect(reducer({
      isAuthorized: false,
    }, {
      type: SET_AUTH_STATUS,
      payload: true,
    })).toEqual({
      isAuthorized: true,
    });
  });
  it(`Reducer should set bookmarks`, () => {
    expect(reducer({
      bookmarks: [],
    }, {
      type: SET_BOOKMARKS,
      payload: [`test`],
    })).toEqual({
      bookmarks: [`test`],
    });
  });
});
