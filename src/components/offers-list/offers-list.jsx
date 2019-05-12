import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {OfferCard} from '../offer-card/offer-card';

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };
  }

  handleMouseEnter(card) {
    this.setState({
      activeCard: card,
    });
  }

  handleMouseLeave() {
    this.setState({
      activeCard: null,
    });
  }

  handleMouseClick(card) {
    this.setState({
      clickedCard: card,
    });
  }

  render() {
    return (
      <div className="cities__places-list places__list tabs__content">
        {this.props.cards.map((card, index) => {
          return <OfferCard
            onMouseEnter = {this.handleMouseEnter.bind(this, card)}
            onMouseLeave = {this.handleMouseLeave.bind(this)}
            key = {index}
            card = {card}
            onClick = {this.handleMouseClick.bind(this)}
          />;
        })}
      </div>
    );
  }
}

OffersList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool,
    mark: PropTypes.string
  })),
};

export {OffersList};
