import PropTypes from 'prop-types';
import {cardTypes} from '../offer-card/offer-card.props';

export const propTypes = {
  fetchBookmarks: PropTypes.func.isRequired,
  bookmarks: PropTypes.arrayOf(PropTypes.shape(cardTypes)),
};
