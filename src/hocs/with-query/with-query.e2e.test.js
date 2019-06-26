import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withQuery from './with-query';

Enzyme.configure({adapter: new Adapter()});

const mockComponent = () => <div/>;
const mockParameters = {
  test: `test`,
  type: `test`,
};

it(`Click works correctly`, () => {
  const mockArray = [];
  const WithActiveItem = withQuery(mockComponent);
  const wrappedComponent = shallow(<WithActiveItem
    location = {{search: `?sort=test&descending=test`}}
    history = {mockArray}
  />);
  wrappedComponent.props().onClick(mockParameters);
  expect(mockArray[0]).toEqual(`?sort=test&descending=false`);
});
