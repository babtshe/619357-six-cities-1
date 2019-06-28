import React from 'react';
import renderer from 'react-test-renderer';
import BookmarkButton from './bookmark-button';

it(`Header should render correctly`, ()=>{
  const tree = renderer
  .create(
      <BookmarkButton
        onClick={()=>{}}
        bookmarked={true}
        isSmall={true}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
