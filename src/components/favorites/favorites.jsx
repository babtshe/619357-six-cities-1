import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {propTypes} from './favorites.props';
import {fetchBookmarks} from '../../redux/operations';
import {getBookmarks} from '../../redux/selectors';
import OffersList from '../offers-list/offers-list';

class Favorites extends PureComponent {
  constructor(props) {
    super(props);
    this.getCitiesList = this.getCitiesList.bind(this);
  }

  render() {
    const {bookmarks} = this.props;
    const cities = this.getCitiesList();
    const isEmpty = !cities.length;
    return (
      <main className={`page__main page__main--favorites${isEmpty ? ` page__main--favorites-empty` : ``}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${isEmpty ? `favorites--empty` : ``}`}>
            {isEmpty ?
            <>
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
              </div>
            </>
              :
            <>
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {cities.map((city)=> {
                  return (
                    <li key={city} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        <OffersList
                          offers = {bookmarks.filter((bookmark) => bookmark.city.name === city)}
                          classPrefix = {`favorites`}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </>}
          </section>
        </div>
      </main>
    );
  }

  getCitiesList() {
    return [...new Set((this.props.bookmarks || []).map((bookmark) => bookmark.city.name))];
  }

  componentDidMount() {
    this.props.fetchBookmarks();
  }
}

Favorites.propTypes = propTypes;

const mapStateToProps = (state) => ({
  bookmarks: getBookmarks(state),
});

const mapDispatchToProps = {
  fetchBookmarks,
};

export {Favorites};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
