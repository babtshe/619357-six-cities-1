import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import {setCity, setAuthRequiredStatus} from '../../redux/actions';
import Header from '../header/header';
import MainView from '../main-view/main-view';
import Favorites from '../favorites/favorites';
import withPrivateRoute from '../../hocs/with-private-route/with-private-route';
import SignIn from '../sign-in/sign-in';
import withAuthorization from '../../hocs/with-authorizaion/with-authorization';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import OfferDetails from '../offer-details/offer-details';
import {Switch, Route} from 'react-router-dom';
import {loginUser} from '../../redux/operations';
import {propTypes} from './app.props';
import {getCities, getCurrentCity, getCurrentCityOffers, getAuthRequiredStatus, getAuthStatus, getUserData} from '../../redux/selectors';

const SignInWrapped = withAuthorization(SignIn);
const FavoritesWrapped = withPrivateRoute(Favorites);
const MainViewWrapped = withActiveItem(MainView);

const App = (props) => {
  const {
    isAuthorized,
    toggleAuthRequiredStatus,
    isAuthRequired,
    userData,
    login
  } = props;
  const loginClickHandler = useCallback((evt) => {
    evt.preventDefault();
    toggleAuthRequiredStatus(isAuthRequired);
  }, [toggleAuthRequiredStatus, isAuthRequired]);
  return (
    <>
      <Header
        isAuthorized = {isAuthorized}
        onLoginClick = {loginClickHandler}
        userEmail = {userData.email}
      />
      <Switch>
        <Route exact path="/" render={(routeProps) => <MainViewWrapped {...routeProps} {...props}/>}/>
        <Route exact path="/login" render={(routeProps) => <SignInWrapped isAuthorized={isAuthorized} from={routeProps.location.state} login={login}/>}/>
        <Route exact path="/favorites" render={(routeProps) => <FavoritesWrapped location={routeProps.location}/>}/>
        <Route exact path="/offer/:id" render={(routeProps) => <OfferDetails offerId={routeProps.match.params.id}/>}/>
        <Route render={() => <h1>404 - Not Found</h1>} />
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
