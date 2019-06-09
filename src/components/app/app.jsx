import React from 'react';
import {connect} from 'react-redux';
import {setCity} from '../../redux/actions';
import MainView from '../main-view/main-view';
import {propTypes} from './app.props';

const App = (props) => {


  return <MainView
    {...props}
  />;
};

const mapStateToProps = (state) => ({
  cities: state.cities.slice(0, 6),
  currentCity: state.city,
  offers: state.offers.filter((offer) => offer.city === state.city.name),
});

const mapDispatchToProps = {
  setCity
};

App.propTypes = propTypes;

export {App, mapStateToProps, mapDispatchToProps};

export default connect(mapStateToProps, mapDispatchToProps)(App);
