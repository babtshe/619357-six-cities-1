import {combineReducers} from 'redux';
import cities from './cities/cities';
import offers from './offers/offers';
import user from './user/user';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.OFFERS]: offers,
  [NameSpace.CITIES]: cities,
  [NameSpace.USER]: user,
});
