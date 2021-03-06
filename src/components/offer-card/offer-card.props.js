import PropTypes from 'prop-types';
import {coordinates} from '../../custom-prop-types/coordinates.prop';

export const cardTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  bookmarked: PropTypes.bool,
  premium: PropTypes.bool,
  location: coordinates.isRequired,
  id: PropTypes.number.isRequired,
};

export const propTypes = {
  card: PropTypes.shape(cardTypes),
  onClick: PropTypes.func,
  classPrefix: PropTypes.string,
};
