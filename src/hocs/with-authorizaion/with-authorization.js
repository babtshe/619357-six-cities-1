import React, {PureComponent} from 'react';
import {propTypes} from './with-authorization.props';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import hoistNonReactStatic from 'hoist-non-react-statics';
import {compose} from 'redux';
import {loginUser} from '../../redux/operations';

const withAuthorization = (Component) => {
  class WithAuthorization extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        email: ``,
        password: ``,
        from: (this.props.from || {}).from || `/`,
      };
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(name, value) {
      this.setState({
        [name]: value,
      });
    }

    onSubmit() {
      const {email, password} = this.state;
      this.props.login(email, password);
    }

    render() {
      if (this.props.isAuthorized) {
        return <Redirect to={this.state.from}/>;
      }
      return (
        <Component
          {...this.props}
          onChange = {this.onChange}
          onSubmit = {this.onSubmit}
          userData = {this.state}
        />);
    }
  }

  WithAuthorization.propTypes = propTypes;

  return hoistNonReactStatic(WithAuthorization, Component);
};

const mapDispatchToProps = {
  login: (data) => loginUser(data),
};

export {withAuthorization};

export default compose(
    connect(null, mapDispatchToProps),
    withAuthorization);
