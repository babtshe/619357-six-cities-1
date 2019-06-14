import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import {reducer} from './reducers';
import {configureAPI} from '../api';

const api = configureAPI((...args) => store.dispatch(...args));
const store = createStore(
    reducer,
    compose(applyMiddleware(thunk.withExtraArgument(api)),
        (typeof window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION__) ?
          window.__REDUX_DEVTOOLS_EXTENSION__() :
          (a) => a)
);

export {store};
