import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';

it(`Header should render correctly`, ()=>{
  const tree = renderer
  .create(
      <Header
        isAuthorized = {false}
        onLoginClick = {()=>{}}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
