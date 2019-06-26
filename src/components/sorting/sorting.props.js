import PropTypes from 'prop-types';

export const propTypes = {
  isOpened: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  onToggle: PropTypes.func,
  onClick: PropTypes.func,
  activeOptionName: PropTypes.string,
};
