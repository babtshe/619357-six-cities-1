import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withReviewSubmit from './with-review-submit';

Enzyme.configure({adapter: new Adapter()});

const mockComponent = () => <div/>;

it(`setting value on change works correctly`, () => {
  const WithActiveItem = withReviewSubmit(mockComponent);
  const wrappedComponent = shallow(<WithActiveItem
    id={1}
    sendReview={()=>{}}
  />);
  wrappedComponent.props().onChange(`name`, `value`);
  expect(wrappedComponent.state()[`name`]).toEqual(`value`);
});

it(`sending data on submit works correctly`, () => {
  const WithActiveItem = withReviewSubmit(mockComponent);
  const submitHandler = jest.fn().mockImplementation(() => Promise.resolve());
  const mockState = {
    rating: `2`,
    comment: `testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest`,
  };
  const wrappedComponent = shallow(<WithActiveItem
    sendReview = {submitHandler}
    id={1}
  />);
  wrappedComponent.setState(mockState);

  wrappedComponent.props().onSubmit();
  expect(submitHandler).toHaveBeenCalledTimes(1);
  expect(submitHandler).toHaveBeenCalledWith(1, mockState);
});
