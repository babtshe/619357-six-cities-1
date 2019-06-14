import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import {reducer} from './reducers';
import {configureAPI} from '../api';
import {createLogger} from 'redux-logger';

const logger = createLogger();
const api = configureAPI((...args) => store.dispatch(...args));
const middlewares = [
  thunk.withExtraArgument(api),
  IS_DEV && logger, // eslint-disable-line
].filter(Boolean);
const store = createStore(
    // combinedReducers,
    reducer,
    compose(
        applyMiddleware(...middlewares),
        (IS_DEV && window.__REDUX_DEVTOOLS_EXTENSION__) ? // eslint-disable-line
          window.__REDUX_DEVTOOLS_EXTENSION__() : (a) => a
    )
);

export default store;
