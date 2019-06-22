import React, {PureComponent} from 'react';
import {propTypes} from './with-authorization.props';
import {Redirect} from 'react-router-dom';

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
      this.props.login(email, password)
      .then(()=>{
        this.setState({
          redirectToReferrer: true,
        });
      });
    }

    render() {
      return (<>
        <Component
          onChange = {this.onChange}
          onSubmit = {this.onSubmit}
          userData = {this.state}
        />
        {this.state.redirectToReferrer ? <Redirect to={this.state.from}/> : ``}
        </>
      );
    }
  }

  WithAuthorization.propTypes = propTypes;

  return WithAuthorization;
};

export default withAuthorization;
