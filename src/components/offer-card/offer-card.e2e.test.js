import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {OfferCard} from './offer-card';

Enzyme.configure({adapter: new Adapter()});

const mockCard = {
  name: `test`,
  type: `apartment`,
  price: 1,
  rating: 1,
  image: `test`,
  mark: true,
  id: 1,
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

  const cardLink = mainView.find(`.place-card__image-wrapper > a`);
  cardLink.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(clickHandler).toHaveBeenCalledWith(mockCard);
});
