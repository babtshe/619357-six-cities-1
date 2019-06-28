import React, {useCallback} from 'react';
import {propTypes} from './offer-card.props';
import {Link} from 'react-router-dom';
import BookmarkButton from '../bookmark-button/bookmark-button';
import withToggleBookmark from '../../hocs/with-toggle-bookmark/with-toggle-bookmark';

const ToggleBookmarkWrapped = withToggleBookmark(BookmarkButton);

const OfferCard = (props) => {
  const {
    card,
    onClick,
    classPrefix,
  } = props;
  const handleMouseClick = useCallback((evt) => {
    evt.preventDefault();
    if (typeof onClick === `function`) {
      onClick(card);
    }
  }, [card]);

  return (
    <article className={`${classPrefix}__place-card place-card`}>
      {!!card.premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${classPrefix}__image-wrapper place-card__image-wrapper`}>
        <a href="#" onClick={handleMouseClick}>
          <img className="place-card__image" src={card.image} width="260" height="200"
            alt="Place image" />
        </a>
      </div>
      <div className={`${classPrefix}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ToggleBookmarkWrapped
            id={card.id}
            bookmarked={card.bookmarked}
            isSmall={true}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${card.rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${card.id}`}>{card.name}</Link>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = propTypes;

export {OfferCard};
