import React from 'react';
import renderer from 'react-test-renderer';
import {OfferCard} from './offer-card';

it(`OfferCard should render correctly`, ()=>{
  const mock = {
    name: `test`,
    type: `Apartment`,
    price: 1,
    rating: 1,
    image: `test`,
    link: `#`,
    mark: `Premium`,
  };
  const tree = renderer
  .create(
      <OfferCard
        card = {mock}
        onClick = {jest.fn}
        onMouseEnter = {jest.fn}
        onMouseLeave = {jest.fn}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
