import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {setCity, setAuthRequiredStatus} from '../../redux/actions';
import Header from '../header/header';
import MainView from '../main-view/main-view';
import SignIn from '../sign-in/sign-in';
import withAuthorization from '../../hocs/with-authorizaion/with-authorization';
import {loginUser} from '../../redux/operations';
import {propTypes} from './app.props';
import {getCities, getCurrentCity, getCurrentCityOffers, getAuthRequiredStatus, getAuthStatus, getUserData} from '../../redux/selectors';

const SignInWrapped = withAuthorization(SignIn);

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.renderView = this.renderView.bind(this);
  }

  render() {
    const {
      isAuthorized,
      toggleAuthRequiredStatus,
      isAuthRequired,
      userData,
    } = this.props;


    return (
      <>
        <Header
          isAuthorized = {isAuthorized}
          onLoginClick = {() => {
            toggleAuthRequiredStatus(isAuthRequired);
          }}
          userEmail = {userData.email}
        />
        {this.renderView()}
      </>
    );
  }

  renderView() {
    const {
      isAuthRequired,
      isAuthorized,
      login,
    } = this.props;
    return (isAuthRequired && !isAuthorized) ?
      <SignInWrapped
        login = {login}
      />
      :
      <MainView
        {...this.props}
      />;
  }
}

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
  // checkAuthStatus: () => fetchUserData(),
  toggleAuthRequiredStatus: (status) => setAuthRequiredStatus(!status),
  login: (data) => loginUser(data),
};

export {App, mapStateToProps, mapDispatchToProps};

export default connect(mapStateToProps, mapDispatchToProps)(App);
