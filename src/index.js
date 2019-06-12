import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './redux/create-store';
import App from './components/app/app';
import {fetchOffers} from './redux/operations';

store.dispatch(fetchOffers);

const init = () => {
  ReactDOM.render(
      <Provider store = {store}>
        <App/>
      </Provider>, document.getElementById(`root`)
  );
};

init();
