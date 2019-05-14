import React, {PureComponent} from 'react';
import {OfferCard} from '../offer-card/offer-card';
import {propTypes} from './offers-list.props';

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
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
        {this.props.cards.map((card) => {
          return <OfferCard
            onMouseEnter = {this.handleMouseEnter}
            onMouseLeave = {this.handleMouseLeave}
            key = {card.name}
            card = {card}
            onClick = {this.handleMouseClick}
          />;
        })}
      </div>
    );
  }
}

OffersList.propTypes = propTypes;

export {OffersList};
