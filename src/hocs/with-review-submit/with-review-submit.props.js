import PropTypes from 'prop-types';

export const propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  sendReview: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool,
};
