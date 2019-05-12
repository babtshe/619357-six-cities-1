import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {OfferCard} from './offer-card';

Enzyme.configure({adapter: new Adapter()});

it(`OfferCard link click is working`, ()=>{
  const clickHandler = jest.fn();
  const mock = {
    name: `test`,
    type: `Apartment`,
    price: 1,
    rating: 1,
    image: `test`,
    link: `#`,
    mark: `Premium`,
  };
  const mainView = shallow(
      <OfferCard
        card = {mock}
        onClick = {clickHandler}
        onMouseEnter = {jest.fn}
        onMouseLeave = {jest.fn}
      />
  );

  const cardLinks = mainView.find(`.place-card__name`);
  cardLinks.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(clickHandler).toHaveBeenCalledWith(mock);
});
