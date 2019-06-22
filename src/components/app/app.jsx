import React from 'react';
import {connect} from 'react-redux';
import {setCity, setAuthRequiredStatus} from '../../redux/actions';
import Header from '../header/header';
import MainView from '../main-view/main-view';
import Favorites from '../favorites/favorites';
import withPrivateRoute from '../../hocs/with-private-route/with-private-route';
import SignIn from '../sign-in/sign-in';
import withAuthorization from '../../hocs/with-authorizaion/with-authorization';
import {Switch, Route} from 'react-router-dom';
import {loginUser} from '../../redux/operations';
import {propTypes} from './app.props';
import {getCities, getCurrentCity, getCurrentCityOffers, getAuthRequiredStatus, getAuthStatus, getUserData} from '../../redux/selectors';

const SignInWrapped = withAuthorization(SignIn);
const FavoritesWrapped = withPrivateRoute(Favorites);

const App = (props) => {
  const {
    isAuthorized,
    toggleAuthRequiredStatus,
    isAuthRequired,
    userData,
    login
  } = props;

  return (
    <>
      <Header
        isAuthorized = {isAuthorized}
        onLoginClick = {() => {
          toggleAuthRequiredStatus(isAuthRequired);
        }}
        userEmail = {userData.email}
      />
      <Switch>
        <Route exact path="/" render={() => <MainView {...props}/>}></Route>
        <Route path="/login" render={(routeProps) => <SignInWrapped from={routeProps.location.state} login={login}/>}></Route>
        <Route path="/favorites" render={(routeProps) => <FavoritesWrapped location={routeProps.location}/>}></Route>
      </Switch>
    </>
  );
};

App.propTypes = propTypes;

const mapStateToProps = (state) => ({
  cities: getCities(state),
  currentCity: getCurrentCity(state),
  offers: getCurrentCityOffers(state),
  isAuthRequired: getAuthRequiredStatus(state),
  isAuthorized: getAuthStatus(state),
  userData: getUserData(state),
});

const mapDispatchToProps = {
  setCity,
  toggleAuthRequiredStatus: (status) => setAuthRequiredStatus(!status),
  login: (data) => loginUser(data),
};

export {App, mapStateToProps, mapDispatchToProps};

export default connect(mapStateToProps, mapDispatchToProps)(App);
