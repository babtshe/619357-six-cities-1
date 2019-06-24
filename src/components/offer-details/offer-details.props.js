import PropTypes from 'prop-types';
import {cardTypes} from '../offer-card/offer-card.props';

export const hostTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  pro: PropTypes.bool,
};

export const propTypes = {
  offer: PropTypes.shape(Object.assign({}, cardTypes, {
    images: PropTypes.arrayOf(PropTypes.string),
    bedrooms: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape(hostTypes).isRequired,
  })).isRequired,
  onAddFavorites: PropTypes.func,
};
