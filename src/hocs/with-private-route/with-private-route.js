import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {propTypes} from './with-private-route.props';
import {getAuthStatus} from '../../redux/selectors';

const withPrivateRoute = (Component) => {
  const WithPrivateRoute = (props) => {
    const {isAuthorized} = props;
    return isAuthorized
      ? <Component {...props}/>
      : <Redirect to={{
        pathname: `/login`,
        state: {from: props.location.pathname},
      }}/>;
  };

  WithPrivateRoute.propTypes = propTypes;

  return WithPrivateRoute;
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthStatus(state),
});

export {withPrivateRoute};

export default compose(
    connect(mapStateToProps),
    withPrivateRoute);
