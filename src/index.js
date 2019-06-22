import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/create-store';
import App from './components/app/app';
import {fetchOffers, fetchUserData} from './redux/operations';

store.dispatch(fetchUserData());
store.dispatch(fetchOffers);

const baseName = IS_DEV ? `/` : window.location.pathname;

const init = () => {
  ReactDOM.render(
      <Provider store = {store}>
        <BrowserRouter basename={baseName}>
          <App/>
        </BrowserRouter>
      </Provider>, document.getElementById(`root`)
  );
};

init();
