import PropTypes from 'prop-types';

export const {propTypes} = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  bookmarked: PropTypes.bool,
  mark: PropTypes.string,
};
