import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/create-store';
import App from './components/app/app';
import {fetchOffers, fetchUserData} from './redux/operations';

store.dispatch(fetchOffers);
store.dispatch(fetchUserData);

const init = () => {
  ReactDOM.render(
      <Provider store = {store}>
        <App/>
      </Provider>, document.getElementById(`root`)
  );
};

init();
