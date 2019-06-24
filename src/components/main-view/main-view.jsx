import React from 'react';
import OffersList from '../offers-list/offers-list';
import CityMap from '../city-map/city-map';
import CitiesList from '../cities-list/cities-list';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import Sorting from '../sorting/sorting';
import withSorting from '../../hocs/with-sorting/with-sorting';
import {propTypes} from './main-view.props';

const MainView = (props) => {
  const {
    setCity,
    cities,
    currentCity,
    offers
  } = props;

  const OffersListWrapped = withActiveItem(OffersList);
  const SortingWrapped = withSorting(Sorting);

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
            <SortingWrapped
              offers = {offers}
            />
            <OffersListWrapped
              offers = {offers}
              classPrefix = {`cities`}
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
