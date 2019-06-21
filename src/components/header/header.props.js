import PropTypes from 'prop-types';

export const propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  user: PropTypes.string,
  onLoginClick: PropTypes.func.isRequired,
  onProfileClick: PropTypes.func,
};
