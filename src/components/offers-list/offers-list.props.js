import PropTypes from 'prop-types';
import {cardTypes} from '../offer-card/offer-card.props';

export const propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(cardTypes)),
  setClickedItem: PropTypes.func,
  ClassPrefix: PropTypes.string,
};
