import React from 'react';
import renderer from 'react-test-renderer';
import {MainView} from './main-view';

jest.mock(`leaflet`, () => {
  return {
    icon() {},
    map() {
      return {setView() {}};
    },
    tileLayer() {
      return {addTo() {}};
    },
    marker() {
      return {addTo() {}};
    },
  };
});

it(`MainView should render correctly`, ()=>{
  const mockCards = [
    {
      name: `test1`,
      type: `Apartment`,
      price: 1,
      rating: 1,
      image: `test`,
      link: `#`,
      mark: `Premium`,
      location: [52.3909553943508, 4.85309666406198],
    },
    {
      name: `test2`,
      type: `Private room`,
      price: 1,
      rating: 1,
      image: `test`,
      link: `#`,
      bookmarked: true,
      location: [52.369553943508, 4.85309666406198],
    }
  ];
  const tree = renderer
  .create(
      <MainView
        cards = {mockCards}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
