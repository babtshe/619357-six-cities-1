import React from 'react';
import renderer from 'react-test-renderer';
import {OfferCard} from './offer-card';

it(`OfferCard should render correctly`, ()=>{
  const mockCard = {
    name: `test1`,
    type: `apartment`,
    price: 1,
    rating: 1,
    image: `test2`,
    premium: true,
    id: 1,
    location: [52.3909553943508, 4.85309666406198],
  };
  const tree = renderer
  .create(
      <OfferCard
        card = {mockCard}
        onClick = {()=>{}}
        onMouseEnter = {()=>{}}
        onMouseLeave = {()=>{}}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
