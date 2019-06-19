import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './sign-in';

it(`Header should render correctly`, ()=>{
  const tree = renderer
  .create(
      <SignIn
        onSubmit = {() => {}}
        onChange = {() => {}}
        userData = {{}}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
