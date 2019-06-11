import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item';

Enzyme.configure({adapter: new Adapter()});

const mockComponent = () => <div/>;

it(`setting active item works correctly`, () => {
  const WithActiveItem = withActiveItem(mockComponent);
  const wrappedComponent = shallow(<WithActiveItem/>);

  wrappedComponent.props().setActiveItem(`test`);
  expect(wrappedComponent.state().activeItem).toEqual(`test`);
});

it(`unsetting active item works correctly`, () => {
  const WithActiveItem = withActiveItem(mockComponent);
  const wrappedComponent = shallow(<WithActiveItem/>);

  wrappedComponent.props().unsetActiveItem();
  expect(wrappedComponent.state().activeItem).toEqual(null);
});

it(`setting clicked item works correctly`, () => {
  const WithActiveItem = withActiveItem(mockComponent);
  const wrappedComponent = shallow(<WithActiveItem/>);

  wrappedComponent.props().setClickedItem(`test`);
  expect(wrappedComponent.state().clickedItem).toEqual(`test`);
});
