import React from 'react';
import {MainView} from '../main-view/main-view';
import {offers} from '../../mocks/offers';

const App = () => {
  return <MainView
    cards = {offers}
  />;
};

export {App};
