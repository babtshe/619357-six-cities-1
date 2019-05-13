import PropTypes from 'prop-types';
import {propTypes as cardTypes} from '../offers-list/offers-list.props';

export const {propTypes} = {
  card: PropTypes.shape(cardTypes),
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};
