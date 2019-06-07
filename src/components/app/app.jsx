import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer';
import {MainView} from '../main-view/main-view';
import {propTypes} from './app.props';

const App = (props) => {
  const {
    setCity,
    cities,
    currentCity,
    offers
  } = props;

  return <MainView
    setCity = {setCity}
    cities = {cities}
    currentCity = {currentCity}
    offers = {offers}
  />;
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cities: state.cities.slice(0, 6),
  currentCity: state.city,
  offers: state.offers.filter((offer) => offer.city === state.city.name),
});

const mapDispatchToProps = (dispatch) => ({
  setCity: (city) => {
    dispatch(ActionCreator.setCity(city));
  }
});

App.propTypes = propTypes;

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
