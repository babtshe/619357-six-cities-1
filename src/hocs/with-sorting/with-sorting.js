import React, {PureComponent} from 'react';
import {propTypes} from './with-sorting.props';
import {parseQueryString} from '../../utils/utils';


const withSorting = (Component) => {
  class WithSorting extends PureComponent {
    constructor(props) {
      super(props);
      this.sort = this.sort.bind(this);
      this.state = {
        offers: this.sort(parseQueryString(this.props.location.search)),
      };
    }

    render() {
      return (
        <Component
          {...this.props}
          offers={this.state.offers}
        />);
    }

    sort({sort, descending}) {
      const newOffers = [...this.props.offers];
      switch (sort) {
        case `price`: {
          newOffers.sort((a, b) => ((descending === `true`) ? (b.price - a.price) : (a.price - b.price)));
          break;
        }
        case `rating`: {
          newOffers.sort((a, b) => ((descending === `true`) ? (b.rating - a.rating) : (a.rating - b.rating)));
          break;
        }
      }

      return newOffers;
    }

  }

  WithSorting.propTypes = propTypes;

  return WithSorting;
};

export default withSorting;
