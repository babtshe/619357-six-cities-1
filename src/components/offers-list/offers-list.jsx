import React from 'react';
import {OfferCard} from '../offer-card/offer-card';
import {propTypes} from './offers-list.props';


const OffersList = (props) => {
  const {
    offers,
    setActiveItem,
    unsetActiveItem,
    setClickedItem,
  } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((card) => {
        return <OfferCard
          onMouseEnter = {setActiveItem}
          onMouseLeave = {unsetActiveItem}
          key = {card.name}
          card = {card}
          onClick = {setClickedItem}
        />;
      })}
    </div>
  );
};

OffersList.propTypes = propTypes;

export default OffersList;
