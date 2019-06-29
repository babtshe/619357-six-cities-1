import React from 'react';
import {OfferCard} from '../offer-card/offer-card';
import {propTypes} from './offers-list.props';


const OffersList = (props) => {
  const {
    offers,
    setClickedItem,
    classPrefix
  } = props;

  return (
    <div className={`${classPrefix}__places-list places__list tabs__content`}>
      {offers.map((card) => {
        return <OfferCard
          key = {card.id}
          card = {card}
          onClick = {setClickedItem}
          classPrefix = {classPrefix}
        />;
      })}
    </div>
  );
};

OffersList.propTypes = propTypes;

export default OffersList;
