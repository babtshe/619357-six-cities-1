import PropTypes from 'prop-types';
import {propTypes as reviewProps} from '../review/review.props';

export const propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(Object.assign({}, reviewProps, {
    id: PropTypes.number.isRequired,
  }))).isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  postReview: PropTypes.func.isRequired,
};
