import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {OfferCard} from './offer-card';

Enzyme.configure({adapter: new Adapter()});

it(`OfferCard link click is working`, ()=>{
  const clickHandler = jest.fn();
  const mockCard = {
    name: `test`,
    type: `Apartment`,
    price: 1,
    rating: 1,
    image: `test`,
    link: `#`,
    mark: `Premium`,
    location: [52.3909553943508, 4.85309666406198],
  };
  const mainView = shallow(
      <OfferCard
        card = {mockCard}
        onClick = {clickHandler}
        onMouseEnter = {()=>{}}
        onMouseLeave = {()=>{}}
      />
  );

  const cardLinks = mainView.find(`.place-card__name`);
  cardLinks.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(clickHandler).toHaveBeenCalledWith(mockCard);
});
