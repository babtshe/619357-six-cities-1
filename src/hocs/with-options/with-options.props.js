import PropTypes from 'prop-types';

export const propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    descending: PropTypes.bool,
  })),
  onClick: PropTypes.func,
  isOpened: PropTypes.bool,
};
