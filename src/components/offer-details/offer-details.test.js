import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {OfferDetails} from './offer-details';

it(`OfferDetails should render correctly`, ()=>{
  const mockOffer = {
    name: `test1`,
    city: {
      location: [52.3909553943508, 4.85309666406198],
    },
    type: `apartment`,
    price: 1,
    rating: 1,
    image: `test2`,
    premium: true,
    id: 1,
    location: [52.3909553943508, 4.85309666406198],
    host: {
      name: `host`,
      id: 1,
      avatar: `test`,
    },
    goods: [`test`],
    images: [`test`],
    maxGuests: 1,
    bedrooms: 1,
  };
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <OfferDetails
        offer={mockOffer}
        nearestOffers={[mockOffer]}
        reviews={[]}
        fetchReviews={()=>{}}
      />
  );

  expect(tree).toMatchSnapshot();
});
