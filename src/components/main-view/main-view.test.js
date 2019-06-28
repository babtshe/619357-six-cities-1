import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MainView from './main-view';

jest.mock(`leaflet`);


it(`MainView should render correctly`, ()=>{
  const mockCards = [
    {
      name: `test1`,
      type: `apartment`,
      price: 1,
      rating: 1,
      id: 1,
      image: `test`,
      premium: true,
      location: [52.3909553943508, 4.85309666406198],
    },
    {
      name: `test2`,
      type: `room`,
      price: 1,
      id: 2,
      rating: 1,
      image: `test`,
      bookmarked: true,
      location: [52.369553943508, 4.85309666406198],
    }
  ];
  const mockCity = {name: `test`, location: [0, 0]};
  const renderer = new ShallowRenderer();
  const tree = renderer
  .render(
      <MainView
        offers = {mockCards}
        setCity = {()=>{}}
        cities = {[mockCity]}
        currentCity = {mockCity}
      />);

  expect(tree).toMatchSnapshot();
});
