import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import combinedReducers from './reducers';
import {configureAPI} from '../api';

const logger = createLogger();
const api = configureAPI((...args) => store.dispatch(...args));
const middlewares = [
  thunk.withExtraArgument(api),
  IS_DEV && logger,
].filter(Boolean);
const store = createStore(
    combinedReducers,
    compose(...[
      applyMiddleware(...middlewares),
      IS_DEV && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ].filter(Boolean)
    )
);

export default store;
