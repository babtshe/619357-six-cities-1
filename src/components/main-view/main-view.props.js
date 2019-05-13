import {PropTypes} from 'prop-types';
import {cardTypes} from '../offer-card/offer-card.props';

export const propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(cardTypes)),
};
