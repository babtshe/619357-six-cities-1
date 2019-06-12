import React from 'react';
import {connect} from 'react-redux';
import {setCity} from '../../redux/actions';
import MainView from '../main-view/main-view';
import {propTypes} from './app.props';
import {getCities, getCurrentCity, getCurrentCityOffers} from '../../redux/selectors';

const App = (props) => {


  return <MainView
    {...props}
  />;
};

App.propTypes = propTypes;

const mapStateToProps = (state) => ({
  cities: getCities(state),
  currentCity: getCurrentCity(state),
  offers: getCurrentCityOffers(state),
});

const mapDispatchToProps = {
  setCity
};

export {App, mapStateToProps, mapDispatchToProps};

export default connect(mapStateToProps, mapDispatchToProps)(App);
