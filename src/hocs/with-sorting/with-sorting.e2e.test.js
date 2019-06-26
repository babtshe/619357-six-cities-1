import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withSorting from './with-sorting';

Enzyme.configure({adapter: new Adapter()});

const mockComponent = () => <div/>;
const mockOffers = [
  {
    price: 1,
  },
  {
    price: 3,
  },
  {
    price: 2
  }
];

it(`Sorting works correctly`, () => {
  const WithActiveItem = withSorting(mockComponent);
  const wrappedComponent = shallow(<WithActiveItem
    location = {{search: `?sort=price`}}
    offers = {mockOffers}
  />);
  expect(wrappedComponent.state().offers).toEqual(mockOffers.sort((a, b)=> a.price - b.price));
});

