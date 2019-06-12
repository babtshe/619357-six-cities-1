import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {reducer} from './reducers';
import {configureAPI} from '../api';

const api = configureAPI((...args) => store.dispatch(...args));
const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export {store};
