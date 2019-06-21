import React from 'react';
import OffersList from '../offers-list/offers-list';
import CityMap from '../city-map/city-map';
import CitiesList from '../cities-list/cities-list';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {propTypes} from './main-view.props';

const MainView = (props) => {
  const {
    setCity,
    cities,
    currentCity,
    offers
  } = props;

  const OffersListWrapped = withActiveItem(OffersList);

  return (
  <>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="cities tabs">
        <CitiesList
          setCity = {setCity}
          cities = {cities}
          currentCity = {currentCity}
        />
      </div>
      <div className="cities__places-wrapper">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} place{(offers.length === 1) ? `` : `s`} to stay in {currentCity.name}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>

            </form>
            <OffersListWrapped
              offers = {offers}
            />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <CityMap
                locations = {offers.map((card) => card.location)}
                cityLocation = {currentCity.location}
                zoom = {currentCity.zoom}
              />
            </section>
          </div>
        </div>
      </div>

    </main>
  </>
  );
};

MainView.propTypes = propTypes;

export default MainView;
