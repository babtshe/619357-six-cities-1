import {PropTypes} from 'prop-types';
import {coordinates} from '../../custom-prop-types/coordinates.prop';

export const propTypes = {
  cityLocation: coordinates.isRequired,
  locations: PropTypes.arrayOf(coordinates).isRequired,
};
