import React from 'react';
import renderer from 'react-test-renderer';
import ReviewForm from './review-form';

it(`Review should render correctly`, ()=>{
  const tree = renderer
  .create(
      <ReviewForm
        onChange={()=>{}}
        onSubmit={()=>{}}
        rating={`1`}
        comment={`test`}
        submitDisabled={false}
        formDisabled={true}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
