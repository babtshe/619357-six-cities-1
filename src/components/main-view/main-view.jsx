import React from 'react';
import OffersList from '../offers-list/offers-list';
import CityMap from '../city-map/city-map';
import CitiesList from '../cities-list/cities-list';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import Sorting from '../sorting/sorting';
import withOptions from '../../hocs/with-options/with-options';
import withQuery from '../../hocs/with-query/with-query';
import {withRouter} from 'react-router-dom';
import withSorting from '../../hocs/with-sorting/with-sorting';
import {propTypes} from './main-view.props';

const MainView = (props) => {
  const {
    setCity,
    cities,
    currentCity,
    offers,
    clickedItem,
    setClickedItem,
  } = props;

  const OffersListWrapped = withRouter(withSorting(withActiveItem(OffersList)));
  const SortingWrapped = withRouter(withQuery(withOptions(Sorting)));

  return (
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
            />
            <OffersListWrapped
              offers = {offers}
              classPrefix = {`cities`}
              setClickedItem = {setClickedItem}
            />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <CityMap
                locations = {offers.map((card) => card.location)}
                cityLocation = {currentCity.location}
                zoom = {currentCity.zoom}
                activeLocation = {clickedItem ? clickedItem.location : null}
              />
            </section>
          </div>
        </div>
      </div>

    </main>
  );
};

MainView.propTypes = propTypes;

export default MainView;
