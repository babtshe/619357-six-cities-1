import React, {PureComponent} from 'react';
import {propTypes} from './with-review-submit.props';

const withReviewSubmit = (Component) => {
  class WithReviewSubmit extends PureComponent {
    constructor(props) {
      super(props);
      this.id = this.props.id;
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        rating: ``,
        comment: ``,
        formDisabled: false,
      };
    }

    render() {
      const formValid = this.validateInput(`rating`, this.state.rating) &&
      this.validateInput(`comment`, this.state.comment);
      return (
        <Component
          {...this.props}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          rating={this.state.rating}
          comment={this.state.comment}
          submitDisabled={!formValid}
          formDisabled={this.state.formDisabled}
        />);
    }

    onChange(name, value) {
      this.setState({
        [name]: value,
      });
    }

    onSubmit() {
      this.setState({
        formDisabled: true,
      });
      const {rating, comment} = this.state;
      this.props.sendReview(this.id, {rating, comment});
      this.setState({
        formDisabled: false,
        rating: ``,
        comment: ``,
      });
    }

    validateInput(name, value) {
      switch (name) {
        case `rating`: return (value <= 5) && (value >= 1);
        case `comment`: return (value.length >= 50) && (value.length <= 300);
      }
      return false;
    }
  }

  WithReviewSubmit.propTypes = propTypes;

  return WithReviewSubmit;
};

export default withReviewSubmit;
