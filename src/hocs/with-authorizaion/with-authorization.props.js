import PropTypes from 'prop-types';

export const propTypes = {
  login: PropTypes.func.isRequired,
  from: PropTypes.shape({
    from: PropTypes.string,
  }),
};
