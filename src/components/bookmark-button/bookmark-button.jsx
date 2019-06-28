import React, {useCallback} from 'react';
import propTypes from './bookmark-button.props';

const BookmarkButton = (props) => {
  const {
    onClick,
    bookmarked,
    isSmall,
  } = props;
  const handleClick = useCallback((evt)=>{
    evt.preventDefault();
    onClick(bookmarked);
  }, [onClick]);
  return (
    <button onClick={handleClick} className={`${isSmall ? `place-card` : `property`}__bookmark-button button ${bookmarked ? `bookmark-button--active` : ``}`} type="button">
      <svg className="place-card__bookmark-icon" width={isSmall ? `18` : `31`} height={isSmall ? `19` : `33`}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

BookmarkButton.propTypes = propTypes;

export default BookmarkButton;
