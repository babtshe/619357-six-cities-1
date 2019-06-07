import React, {useCallback} from 'react';
import {propTypes} from '../cities-list/cities-list.props';

const CitiesList = (props) => {
  const {
    setCity,
    cities,
    currentCity,
  } = props;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => {
          const handleCityClick = useCallback((evt) => {
            evt.preventDefault();
            setCity(city);
          }, [city]);
          return (
            <li className="locations__item" key={city.name}>
              <a className={`locations__item-link tabs__item ${(city.name === currentCity.name) ? `tabs__item--active` : ``}`}
                href="#"
                onClick={handleCityClick}>
                <span>{city.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

CitiesList.propTypes = propTypes;


export {CitiesList};
