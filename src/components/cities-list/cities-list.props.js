import PropTypes from 'prop-types';
import {coordinates} from '../../custom-prop-types/coordinates.prop';

export const cityTypes = {
  name: PropTypes.string.isRequired,
  location: coordinates.isRequired,
};

export const propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape(cityTypes)).isRequired,
  currentCity: PropTypes.shape(cityTypes).isRequired,
};
