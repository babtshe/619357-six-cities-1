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
            type: `Apartment`,
            price: 1,
            rating: 1,
            image: `test`,
            link: `#`,
            mark: `Premium`,
          },
          {
            name: `test`,
            type: `Private room`,
            price: 1,
            rating: 1,
            image: `test`,
            link: `#`,
            bookmarked: true,
          }
        ]}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
