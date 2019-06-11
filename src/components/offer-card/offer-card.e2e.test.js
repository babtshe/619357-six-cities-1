import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {OfferCard} from './offer-card';

Enzyme.configure({adapter: new Adapter()});

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

it(`OfferCard link click is working`, ()=>{
  const clickHandler = jest.fn();
  const mainView = shallow(
      <OfferCard
        card = {mockCard}
        onClick = {clickHandler}
        onMouseEnter = {()=>{}}
        onMouseLeave = {()=>{}}
      />
  );

  const cardLink = mainView.find(`.place-card__name`);
  cardLink.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(clickHandler).toHaveBeenCalledWith(mockCard);
});

it(`OfferCard mouseEnter is working`, ()=>{
  const mouseEnterHandler = jest.fn();
  const mainView = shallow(
      <OfferCard
        card = {mockCard}
        onClick = {()=>{}}
        onMouseEnter = {mouseEnterHandler}
        onMouseLeave = {()=>{}}
      />
  );

  const cardLink = mainView.find(`.cities__place-card`);
  cardLink.simulate(`mouseenter`);
  expect(mouseEnterHandler).toHaveBeenCalledTimes(1);
  expect(mouseEnterHandler).toHaveBeenCalledWith(mockCard);
});
