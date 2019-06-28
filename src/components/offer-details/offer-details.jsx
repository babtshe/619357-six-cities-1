import React, {PureComponent} from 'react';
import {propTypes} from './offer-details.props';
import {connect} from 'react-redux';
import {getOfferById, getReviews, getNearestOffers} from '../../redux/selectors';
import {fetchReviews} from '../../redux/operations';
import ReviewsList from '../reviews-list/reviews-list';
import OffersList from '../offers-list/offers-list';
import BookmarkButton from '../bookmark-button/bookmark-button';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withToggleBookmark from '../../hocs/with-toggle-bookmark/with-toggle-bookmark';
import CityMap from '../city-map/city-map';

const ToggleBookmarkWrapped = withToggleBookmark(BookmarkButton);
const OffersListWrapped = withActiveItem(OffersList);

class OfferDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.topElement = React.createRef();
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  render() {
    if (!this.props.offer) {
      return null;
    }
    const {
      offer,
      reviews,
      nearestOffers,
    } = this.props;
    const {
      images,
      premium,
      name,
      rating,
      type,
      bedrooms,
      maxGuests,
      price,
      goods,
      host,
      description,
      bookmarked,
      id,
    } = offer;
    return (
      <main ref={this.topElement} className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {(images || []).map((image) => {
                return (
                  <div className="property__image-wrapper" key={image}>
                    <img className="property__image" src={image} alt="Photo studio"/>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {premium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ``
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {name}
                </h1>
                <ToggleBookmarkWrapped
                  id={id}
                  bookmarked={bookmarked}
                />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating / 20}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type === `house` ? `Entire place` : `${type.charAt(0).toUpperCase()}${type.slice(1)}`}

                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedroom{(bedrooms === 1) ? `` : `s`}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxGuests} adult{(maxGuests === 1) ? `` : `s`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {(goods || []).map((item) => {
                    return (
                      <li className="property__inside-item" key={item}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.pro ?
                    <span className="property__user-status">
                      Pro
                    </span> : ``
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewsList
                reviews={reviews}
                id={id}
              />
            </div>
          </div>
          <section className="property__map map">
            <CityMap
              locations={this.props.nearestOffers.reduce((acc, item) => {
                acc.push(item.location);
                return acc;
              }, [this.props.offer.location])}
              cityLocation={this.props.nearestOffers[0].city.location}
              zoom={nearestOffers[0].city.zoom}
              activeLocation = {this.props.offer.location}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersListWrapped
              offers = {this.props.nearestOffers}
              classPrefix = {`near`}
            />
          </section>
        </div>
      </main>
    );
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.offerId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.offerId !== this.props.offerId) {
      this.props.fetchReviews(this.props.offerId);
      this.scrollToTop();
    }
  }

  scrollToTop() {
    this.topElement.current.scrollIntoView();
  }
}

OfferDetails.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => ({
  offer: getOfferById(state, ownProps),
  reviews: getReviews(state),
  nearestOffers: getNearestOffers(state, ownProps),
});

const mapDispatchToProps = {
  fetchReviews: (id) => fetchReviews(id),
};

export {OfferDetails};

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);
