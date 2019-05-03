import React from 'react';
import {MainView} from '../main-view/main-view';

const App = () => {
  const clickHandler = (evt) => {
    evt.preventDefault();
  };
  const cards = [
    {
      name: `Beautiful &amp; luxurious apartment at great location`,
      id: 1,
      type: `Apartment`,
      price: 120,
      rating: 93,
      image: `img/apartment-01.jpg`,
      link: `#`,
      handleClick: clickHandler,
      bookmarked: false,
      mark: `Premium`,
    },
    {
      name: `Wood and stone place`,
      id: 2,
      type: `Private room`,
      price: 80,
      rating: 80,
      image: `img/room.jpg`,
      link: `#`,
      handleClick: clickHandler,
    },
    {
      name: `Canal View Prinsengracht`,
      id: 3,
      type: `Apartment`,
      price: 132,
      rating: 80,
      image: `img/apartment-02.jpg`,
      link: `#`,
      handleClick: clickHandler,
    },
    {
      name: `Nice, cozy, warm big bed apartment`,
      id: 4,
      type: `Apartment`,
      price: 180,
      rating: 100,
      image: `img/apartment-03.jpg`,
      link: `#`,
      handleClick: clickHandler,
      mark: `Premium`,
    },
    {
      name: `Wood and stone place`,
      id: 5,
      type: `Private room`,
      price: 80,
      rating: 80,
      image: `img/room.jpg`,
      link: `#`,
      handleClick: clickHandler,
      bookmarked: true,
    }
  ];
  return <MainView
    cards = {cards}
  />;
};

export {App};
