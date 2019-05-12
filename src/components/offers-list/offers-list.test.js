import React from 'react';
import renderer from 'react-test-renderer';
import {OffersList} from './offers-list';

it(`OffersList should render correctly`, ()=>{
  const mock = [
    {
      name: `test`,
      type: `Apartment`,
      price: 1,
      rating: 1,
      image: `test`,
      link: `#`,
      mark: `Premium`,
    },
    {
      name: `test`,
      type: `Private room`,
      price: 1,
      rating: 1,
      image: `test`,
      link: `#`,
      bookmarked: true,
    }
  ];
  const tree = renderer
  .create(
      <OffersList
        cards = {mock}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
