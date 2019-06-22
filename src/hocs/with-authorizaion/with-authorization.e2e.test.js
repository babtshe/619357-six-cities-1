import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withAuthorization from './with-authorization';

Enzyme.configure({adapter: new Adapter()});

const mockComponent = () => <div/>;

it(`setting value on change works correctly`, () => {
  const WithActiveItem = withAuthorization(mockComponent);
  const wrappedComponent = shallow(<WithActiveItem
    login = {() => {}}
  />);
  wrappedComponent.props().children[0].props.onChange(`name`, `value`);
  expect(wrappedComponent.state()[`name`]).toEqual(`value`);
});

it(`sending data on submit works correctly`, () => {
  const WithActiveItem = withAuthorization(mockComponent);
  const submitHandler = jest.fn().mockImplementation(() => Promise.resolve());
  const mockState = {
    email: `email`,
    password: `password`,
  };
  const wrappedComponent = shallow(<WithActiveItem
    login = {submitHandler}
  />);
  wrappedComponent.setState(mockState);

  wrappedComponent.props().children[0].props.onSubmit();
  expect(submitHandler).toHaveBeenCalledTimes(1);
  expect(submitHandler).toHaveBeenCalledWith(mockState.email, mockState.password);

});
