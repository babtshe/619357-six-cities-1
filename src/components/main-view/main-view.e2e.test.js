import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MainView} from './main-view';

Enzyme.configure({adapter: new Adapter()});

it(`Card link click is working`, ()=>{
  const clickHandler = jest.fn();
  const mainView = shallow(
      <MainView
        cards = {[
          {
            name: `test`,
            id: 0,
            type: `Apartment`,
            price: 0,
            rating: 0,
            image: `test`,
            link: `#`,
            handleClick: clickHandler,
            mark: `Premium`,
          },
        ]}
      />
  );

  const cardLinks = mainView.find(`.place-card__name`);
  cardLinks.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
