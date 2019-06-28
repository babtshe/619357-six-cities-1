import PropTypes from 'prop-types';

export const propTypes = {
  offers: PropTypes.array.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};
