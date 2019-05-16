import PropTypes from 'prop-types';

const arrayOfCoordinates = (props, propName, componentName) => {
  const arrayPropLength = props[propName].length;

  if (!Array.isArray(props[propName]) ||
      arrayPropLength !== 2 ||
      props[propName].every(Number.isInteger)) {
    return new Error(
        `${propName} in ${componentName} has to be an array of numbers with 2 items!`
    );
  }
  return null;
};

export const cardTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  bookmarked: PropTypes.bool,
  mark: PropTypes.string,
  location: arrayOfCoordinates.isRequired,
};

export const propTypes = {
  card: PropTypes.shape(cardTypes),
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};
