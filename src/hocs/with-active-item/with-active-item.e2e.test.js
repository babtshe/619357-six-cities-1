import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item';

Enzyme.configure({adapter: new Adapter()});

const mockComponent = () => <div/>;

it(`setting clicked item works correctly`, () => {
  const WithActiveItem = withActiveItem(mockComponent);
  const wrappedComponent = shallow(<WithActiveItem/>);

  wrappedComponent.props().setClickedItem(`test`);
  expect(wrappedComponent.state().clickedItem).toEqual(`test`);
});
