import React from 'react';
import renderer from 'react-test-renderer';
import {MainView} from './main-view';

it(`MainView should render correctly`, ()=>{
  const tree = renderer
  .create(
      <MainView
        cards = {[
          {
            name: `test`,
            id: 0,
            type: `Apartment`,
            price: 1,
            rating: 1,
            image: `test`,
            link: `#`,
            handleClick: jest.fn(),
            mark: `Premium`,
          },
          {
            name: `test`,
            id: 1,
            type: `Private room`,
            price: 1,
            rating: 1,
            image: `test`,
            link: `#`,
            handleClick: jest.fn(),
            bookmarked: true,
          }
        ]}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
