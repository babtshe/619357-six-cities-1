import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewsList} from './reviews-list';

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
    id: 1
  };
  const tree = renderer
  .create(
      <ReviewsList
        reviews={[mockReview]}
        id={1}
        postReview={()=>{}}
        isAuthorized={true}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
