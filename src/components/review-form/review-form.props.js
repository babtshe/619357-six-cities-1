import PropTypes from 'prop-types';

export const propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  submitDisabled: PropTypes.bool,
  formDisabled: PropTypes.bool,
};
