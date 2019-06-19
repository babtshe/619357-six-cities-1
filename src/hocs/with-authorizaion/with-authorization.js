import React, {PureComponent} from 'react';
import {propTypes} from './with-authorization.props';

const withAuthorization = (Component) => {
  class WithAuthorization extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        email: ``,
        password: ``,
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
      return (
        <Component
          onChange = {this.onChange}
          onSubmit = {this.onSubmit}
          userData = {this.state}
        />
      );
    }
  }

  WithAuthorization.propTypes = propTypes;

  return WithAuthorization;
};

export default withAuthorization;
