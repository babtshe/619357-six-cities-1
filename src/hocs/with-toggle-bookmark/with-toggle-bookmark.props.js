import PropTypes from 'prop-types';

export const propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  bookmarked: PropTypes.bool.isRequired,
};
