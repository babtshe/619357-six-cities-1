import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from './offers-list';

jest.mock(`../offer-card/offer-card.jsx`, () => ({OfferCard: () => null}));
it(`OffersList should render correctly`, ()=>{
  const mockCards = [
    {
      name: `test1`,
      type: `apartment`,
      price: 1,
      rating: 1,
      id: 1,
      image: `test`,
      link: `#`,
      premium: true,
      location: [52.3909553943508, 4.85309666406198],
    },
    {
      name: `test2`,
      type: `room`,
      price: 1,
      rating: 1,
      id: 2,
      image: `test`,
      bookmarked: true,
      location: [52.369553943508, 4.85309666406198],
    }
  ];
  const tree = renderer
  .create(
      <OffersList
        offers = {mockCards}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
