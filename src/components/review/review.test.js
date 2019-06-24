import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review';

it(`Review should render correctly`, ()=>{
  const mockReview = {
    user: {
      name: `test`,
      avatar: `test`,
    },
    rating: 100,
    comment: `test`,
    date: `01-01-2001`,
    dateString: `test`,
  };
  const tree = renderer
  .create(
      <Review
        {...mockReview}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
