import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CitiesList from './cities-list';

Enzyme.configure({adapter: new Adapter()});

it(`OfferCard link click is working`, ()=>{
  const clickHandler = jest.fn();
  const mockCity = {name: `test`, location: [0, 0]};
  const citiesList = shallow(
      <CitiesList
        setCity = {clickHandler}
        cities = {[mockCity]}
        currentCity = {mockCity}
      />
  );

  const cityLink = citiesList.find(`.locations__item-link`);
  cityLink.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(clickHandler).toHaveBeenCalledWith(mockCity);
});
