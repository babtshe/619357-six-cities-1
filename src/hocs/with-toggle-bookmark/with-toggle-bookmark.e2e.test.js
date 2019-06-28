import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {withToggleBookmark} from './with-toggle-bookmark';

Enzyme.configure({adapter: new Adapter()});

const mockComponent = () => <div/>;

it(`changing status on click works correctly`, () => {
  const WithActiveItem = withToggleBookmark(mockComponent);
  const clickHandler = jest.fn();
  const mockData = {
    id: 10,
    bookmarked: false,
  };
  const wrappedComponent = shallow(<WithActiveItem
    isAuthorized={true}
    id={mockData.id}
    bookmarked={mockData.bookmarked}
    sendBookmarkedStatus={clickHandler}
  />);
  wrappedComponent.props().onClick();
  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(clickHandler).toHaveBeenCalledWith(mockData.id, +!mockData.bookmarked);
});
