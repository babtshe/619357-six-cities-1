import {PropTypes} from 'prop-types';
import {coordinates} from '../../custom-prop-types/coordinates.prop';

export const propTypes = {
  locations: PropTypes.arrayOf(coordinates).isRequired,
  mapProvider: PropTypes.object,
};
