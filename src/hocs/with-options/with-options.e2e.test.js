import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withOptions from './with-options';

Enzyme.configure({adapter: new Adapter()});

const mockComponent = () => <div/>;
const mockOptions = [
  {
    name: `test`,
  },
];

it(`Toggling works correctly`, () => {
  const WithActiveItem = withOptions(mockComponent);
  const wrappedComponent = shallow(<WithActiveItem
    isOpened = {false}
  />);
  wrappedComponent.props().onToggle();
  expect(wrappedComponent.state().isOpened).toEqual(true);
});

it(`Click works correctly`, () => {
  const WithActiveItem = withOptions(mockComponent);
  const mockFunction = jest.fn();
  const wrappedComponent = shallow(<WithActiveItem
    options = {mockOptions}
    isOpened = {true}
    onClick = {mockFunction}
  />);
  wrappedComponent.props().onClick(mockOptions[0]);
  expect(wrappedComponent.state().activeOptionName).toEqual(mockOptions[0]);
  expect(wrappedComponent.state().isOpened).toEqual(false);
  expect(mockFunction).toHaveBeenCalledTimes(1);
});
