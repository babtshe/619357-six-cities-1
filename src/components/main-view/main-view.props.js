import {PropTypes} from 'prop-types';
import {propTypes as cardTypes} from '../offers-list/offers-list.props';

export const {propTypes} = {
  cards: PropTypes.arrayOf(PropTypes.shape(cardTypes)),
};
