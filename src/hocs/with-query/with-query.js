import React, {PureComponent} from 'react';
import {propTypes} from './with-query.props';
import {stringifyQuery, parseQueryString} from '../../utils/utils';

const withQuery = (Component) => {
  class WithQuery extends PureComponent {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          onClick={this.onClick}
          activeParams={parseQueryString(this.props.location.search)}
        />);
    }

    onClick(parameters) {
      if (parameters.type) {
        const searchString = stringifyQuery({
          sort: parameters.type,
          descending: !!parameters.descending,
        });
        this.props.history.push(searchString);
      }
    }
  }

  WithQuery.propTypes = propTypes;

  return WithQuery;
};

export default withQuery;
