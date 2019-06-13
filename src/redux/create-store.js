import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {reducer} from './reducers';
import {configureAPI} from '../api';

const connectReduxDevtools = (...args) => {
  const checkIfAvailable = () => {
    return (typeof window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION__);
  };
  return checkIfAvailable() ? [...args, window.__REDUX_DEVTOOLS_EXTENSION__()] : [...args];
};

const api = configureAPI((...args) => store.dispatch(...args));
const store = createStore(
    reducer,
    compose(...connectReduxDevtools(applyMiddleware(thunk.withExtraArgument(api))))
);

export {store};
