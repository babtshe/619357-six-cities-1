import React, {PureComponent} from 'react';
import {propTypes} from './with-sorting.props';

const OPTIONS = [
  {
    name: `Popular`,
    type: `popular`,
    descending: true,
  },
  {
    name: `Price: low to high`,
    type: `price`,
    descending: false,
  },
  {
    name: `Price: high to low`,
    type: `price`,
    descending: true,
  },
  {
    name: `Top rated first`,
    type: `rating`,
    descending: true,
  }
];

const withSorting = (Component) => {
  class WithSorting extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isOpened: false,
        activeName: `Popular`,
        offers: this.props.offers,
      };
      this.onToggle = this.onToggle.bind(this);
      this.onClick = this.onClick.bind(this);
      this.sort = this.sort.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          isOpened={this.state.isOpened}
          options={OPTIONS}
          activeName={this.state.activeName}
          onToggle={this.onToggle}
          onClick={this.onClick}
          offers={this.state.offers}
        />);
    }

    onToggle() {
      this.setState((prevState) => ({
        isOpened: !prevState.isOpened,
      }));
    }

    onClick(name) {
      if (name !== this.state.activeName) {
        this.setState({
          activeName: name,
          isOpened: false,
        });
        const activeSort = OPTIONS.find((option) => option.name === name);
        this.sort(activeSort.type, activeSort.descending);
      }
    }

    sort(type, descending) {
      const newOffers = [...this.props.offers];
      switch (type) {
        case `price`: {
          newOffers.sort((a, b) => descending ? (b.price - a.price) : (a.price - b.price));
          break;
        }
        case `rating`: {
          newOffers.sort((a, b) => descending ? (b.rating - a.rating) : (a.rating - b.rating));
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
