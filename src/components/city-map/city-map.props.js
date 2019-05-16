import {PropTypes} from 'prop-types';
import {cardTypes} from '../offer-card/offer-card.props';

export const propTypes = {
  locations: PropTypes.arrayOf([cardTypes.location]).isRequired,
};
